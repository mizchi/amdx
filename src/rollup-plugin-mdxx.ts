import { Plugin } from "rollup";
import { parse } from "./parser";

export const mdxx = (
  options: { intro?: string; jsxFactory?: string; Fragment?: string } = {}
) => {
  const intro = options.intro || `import React from "react"`;
  const jsxFactory = options.jsxFactory || `React.createElement`;
  const Fragment = options.Fragment || `React.Fragment`;

  return {
    async transform(code: string, id: string) {
      if (id.endsWith(".mdx") || id.endsWith(".md")) {
        const { ast, imports } = parse(code, {});
        const stringifiedAst = JSON.stringify(ast);

        const names = [];
        let importsCode = "";
        for (const i of imports) {
          const name = i.default as string;
          importsCode += `import ${name} from "${i.importPath}";\n`;
          names.push(name);
        }
        const componentsCode = "{ " + names.join(",") + " }";
        const output = `
        ${intro};
        ${importsCode};
        import { compile } from "mdxx-compiler";
        export default (props) => {
          const options = { props, h: ${jsxFactory}, Fragment: ${Fragment}, components: ${componentsCode}};
          return compile(${stringifiedAst}, options);
        }
        `;
        return output;
      }
    }
  } as Plugin;
};
