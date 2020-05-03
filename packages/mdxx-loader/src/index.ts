// const parser = require("mdxx-parser");
import { parse } from "mdxx-parser";

module.exports = function (source: string) {
  const intro = `import React from "react"`;
  const jsxFactory = `React.createElement`;
  const Fragment = `React.Fragment`;
  const { ast, imports, frontmatter } = parse(source, {});

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
    export const frontmatter = ${JSON.stringify(frontmatter)};
    export default (props) => {
      const options = {
        props,
        h: ${jsxFactory},
        Fragment: ${Fragment},
        components: ${componentsCode}
      };
      return compile(${stringifiedAst}, options);
    }
    `;
  return output;
};
