import * as MDAST from "mdast";
import unified from "unified";
import visit from "unist-util-visit";
import toMDAST from "remark-parse";
// @ts-ignore
import math from "remark-math";
// @ts-ignore
import hljs from "remark-highlight.js";
// @ts-ignore
import breaks from "remark-breaks";
// @ts-ignore
import katex from "remark-html-katex";
// @ts-ignore
// import html from "remark-html";
import toc from "remark-toc";
// @ts-ignore
import frontmatter from "remark-frontmatter";
import stringify from "remark-stringify";
// @ts-ignore
import remarkMdx from "remark-mdx";
// @ts-ignore
import squeeze from "remark-squeeze-paragraphs";
// @ts-ignore
import raw from "hast-util-raw";
// @ts-ignore
import { isComment, getCommentContents } from "@mdx-js/util";
import {
  MDXOptions,
  Creator,
  MDXHast$ImportNode,
  MDXHast$ExportNode,
  MDXHast$Node
} from "./types";
// @ts-ignore
import toHAST from "mdast-util-to-hast";
// @ts-ignore
import { parse as parseBabel } from "@babel/core";

const rawToElement: unified.Plugin = function(option: any) {
  return function(tree: any, file: any) {
    visit(tree, "raw" as any, (node: MDAST.Content) => {
      const { children, tagName, properties } = raw(node);
      // @ts-ignore
      node.type = "element";
      node.children = children;
      node.tagName = tagName;
      node.properties = properties;
    });
  };
};

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
        [name]: true
      };
    }

    if (value.type === "JSXExpressionContainer") {
      return {
        ...acc,
        [name]: value.expression.value
      };
    } else {
      return {
        ...acc,
        [name]: value.value
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
        props: parseAttributes(node.openingElement.attributes)
      };
    } else {
      return {
        tagName: node.openingElement.name.name,
        props: {
          ...parseAttributes(node.openingElement.attributes),
          children: node.children.map((n: any) => _parseJSXNode(n))
        }
      };
    }
  } else if (node.type === "JSXText") {
    return node.value;
  }

  throw new Error(`Unsupported: ${node.type}`);
}

function parseJSX(code: string) {
  const parsed = parseBabel(code, {
    configFile: false,
    babelrc: false,
    plugins: [
      require("@babel/plugin-syntax-jsx"),
      require("@babel/plugin-syntax-object-rest-spread")
    ]
  });

  // @ts-ignore
  const jsxExpr = parsed.program.body[0].expression;
  return _parseJSXNode(jsxExpr);
}

// import
function parseImport(code: string): ParsedImports {
  const parsed = parseBabel(code, {
    configFile: false,
    babelrc: false,
    plugins: [require("@babel/plugin-syntax-object-rest-spread")]
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
          imported: spec.imported.name
        });
      }
    });
    return {
      default: _default,
      names,
      importPath: line.source.value
    };
  });
}

type ParsedImports = Array<{
  importPath: string;
  default: string | void;
  names: Array<{ local: string; imported: string }>;
}>;

type ParsedExports = Array<any>;

type MDXNode = any;

export function parse(
  code: string,
  options: any
): {
  ast: any;
  imports: ParsedImports;
  exports: ParsedExports;
} {
  const parse = unified()
    .use(toMDAST, { footnotes: true })
    .use(remarkMdx)
    .use(squeeze)
    .use(breaks)
    .use(hljs)
    .use(frontmatter, ["yaml"])
    .use(katex).parse;

  const ast = parse(code) as any;
  // do not handle yet
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
    children: nodes
  };

  const hast = toHAST(newAst, {
    handlers: {
      inlineCode(h: Creator, node: MDXNode) {
        return {
          ...node,
          type: "element",
          tagName: "inlineCode",
          properties: {},
          children: [
            {
              type: "text",
              value: node.value
            }
          ]
        };
      },
      jsx(h: Creator, node: MDXNode) {
        const parsed = parseJSX(node.value);
        return { ...node, type: "jsx", value: parsed };
      },
      comment(h: Creator, node: MDXNode) {
        return { ...node, type: "commment" };
      }
    },
    allowDangerousHTML: true
  });
  return {
    ast: hast,
    imports: parsedImports,
    exports
  };
}
