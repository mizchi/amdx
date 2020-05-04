// import * as MDAST from "mdast";
import unified from "unified";
import toMDAST from "remark-parse";
// @ts-ignore
import math from "remark-math/block";
// @ts-ignore
import breaks from "remark-breaks";
// @ts-ignore
import katex from "remark-html-katex";
// @ts-ignore
import toc from "remark-toc";
// @ts-ignore
import frontmatterPlugin from "remark-frontmatter";
// @ts-ignore
import remarkMdx from "remark-mdx";
// @ts-ignore
import squeeze from "remark-squeeze-paragraphs";
// @ts-ignore
import toHAST from "mdast-util-to-hast";
// import { parse as parseBabel } from "@babel/core";
import { parse as parseBabel } from "@babel/core";
import { highlighter } from "./highlighter";
import { ParseResult, ParsedImports, ParseOptions } from "..";
// @ts-ignore
import yaml from "yaml";
import { normalizeHeading } from "./normalizeHeading";
import { markCursorLine } from "./markCursorLine";

type JSXNode = {
  tagName: string;
  props: any;
};

function parseAttributes(attrs: any) {
  return attrs.reduce((acc: any, attr: any) => {
    const name = attr.name.name;
    const value = attr.value;

    if (value === null) {
      return {
        ...acc,
        [name]: true,
      };
    }

    if (value.type === "JSXExpressionContainer") {
      return {
        ...acc,
        [name]: value.expression.value,
      };
    } else {
      return {
        ...acc,
        [name]: value.value,
      };
    }
    throw new Error("Unsupported jsx property literal");
  }, {});
}

function _parseJSXNode(node: any): JSXNode | string {
  if (node.type === "JSXElement") {
    if (node.openingElement.selfClosing) {
      return {
        tagName: node.openingElement.name.name,
        props: parseAttributes(node.openingElement.attributes),
      };
    } else {
      return {
        tagName: node.openingElement.name.name,
        props: {
          ...parseAttributes(node.openingElement.attributes),
          children: node.children.map((n: any) => _parseJSXNode(n)),
        },
      };
    }
  } else if (node.type === "JSXText") {
    return node.value;
  }

  throw new Error(`Unsupported: ${node.type}`);
}

function parseJSX(code: string) {
  const parsed = parseBabel(code, {
    babelrc: false,
    plugins: [
      require("@babel/plugin-syntax-jsx"),
      require("@babel/plugin-syntax-object-rest-spread"),
    ],
  });

  // @ts-ignore
  const jsxExpr = parsed.program.body[0].expression;
  return _parseJSXNode(jsxExpr);
}

// import
function parseImport(code: string): ParsedImports {
  const parsed = parseBabel(code, {
    babelrc: false,
    plugins: [require("@babel/plugin-syntax-object-rest-spread")],
  }) as any;

  const body = parsed.program.body;
  return body.map((line: any) => {
    let _default;
    let names: Array<{ local: string; imported: string }> = [];
    line.specifiers.forEach((spec: any) => {
      if (spec.type === "ImportDefaultSpecifier") {
        _default = spec.local.name;
      } else if (spec.type === "ImportSpecifier") {
        names.push({
          local: spec.local.name,
          imported: spec.imported.name,
        });
      }
    });
    return {
      default: _default,
      names,
      importPath: line.source.value,
    };
  });
}

type MDXNode = any;

const vfile = require("vfile");

const fn = unified()
  .use(toMDAST, { footnotes: true })
  .use(markCursorLine)
  .use(math)
  .use(katex)
  .use(normalizeHeading)
  .use(frontmatterPlugin, [{ type: "yaml", marker: "-" }])
  .use(remarkMdx)
  .use(squeeze)
  .use(breaks)
  .use(highlighter);

export function parse(code: string, options: ParseOptions = {}): ParseResult {
  const errors = [];
  const file = vfile();
  file.contents = code;
  if (options.cursor) {
    file.data.cursor = options.cursor;
  }

  const parsed = fn.parse(file);
  const ast = fn.runSync(parsed, file) as any;

  let frontmatter = null;
  const frontmatterNode = ast.children.find(
    (child: any) => child.type === "yaml"
  );
  if (frontmatterNode) {
    try {
      const yamlParsed = yaml.parse(frontmatterNode.value);
      frontmatter = yamlParsed;
    } catch (err) {
      errors.push(err.message);
    }
  }

  const exports = ast.children.filter((c: any) => c.type === "export");
  const imports = ast.children.filter((c: any) => c.type === "import");

  const parsedImports = parseImport(
    imports.map((i: any) => i.value).join("\n")
  );

  const nodes = ast.children.filter(
    (c: any) => c.type !== "import" && c.type !== "export"
  );

  const newAst = {
    ...ast,
    children: nodes,
  };

  const hast = toHAST(newAst, {
    handlers: {
      // TODO: test
      inlineCode(h: any, node: MDXNode) {
        return {
          ...node,
          type: "element",
          tagName: "code",
          properties: {},
          children: [
            {
              type: "text",
              value: node.value,
            },
          ],
        };
      },
      jsx(h: any, node: MDXNode) {
        const parsed = parseJSX(node.value);
        return { ...node, type: "jsx", value: parsed };
      },
      comment(h: any, node: MDXNode) {
        return { ...node, type: "commment" };
      },
    },
    allowDangerousHtml: true,
  });

  // console.log("file", file);
  return {
    ast: hast,
    imports: parsedImports,
    exports,
    frontmatter,
    errors,
  };
}
