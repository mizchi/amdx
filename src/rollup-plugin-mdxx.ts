import fs from "fs";
import { Plugin } from "rollup";
import { parse } from "./parser";

export const mdxx = (options: { jsxPragma?: string } = {}) => {
  return {
    async transform(code: string, id: string) {
      if (id.endsWith(".mdx")) {
        console.log("[tranform]", id);
        const { ast, imports } = parse(code, {});
        const stringifiedAst = JSON.stringify(ast);

        let output = "";
        for (const i of imports) {
          output += `import ${i.default} from "${i.importPath}";\n`;
        }
        output += `import React from "react"\n`;
        output += `import { compile } from "mdxx-compiler"\n`;
        output += `export default () => {
          const options = { h: React.createElement, Fragment: React.Fragment, components: {}};
          return compile(${stringifiedAst}, options);
        }`;
        return output;
      }
    }
  } as Plugin;
};
