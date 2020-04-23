const parser = require("mdxx-parser"); // module.exportsとimport文は混ぜて使えない
const compiler = require("mdxx-compiler");

module.exports = function (source: string) {
  const intro = `import React from "react"`;
  const jsxFactory = `React.createElement`;
  const Fragment = `React.Fragment`;
  console.log(source);
  const { ast, imports } = parser.parse(source, {});
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
};
