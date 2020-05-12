// const parser = require("amdx");
import { parse } from "amdx";
import { getOptions } from "loader-utils";

module.exports = function (source: string) {
  const options = getOptions(this as any) || {};
  const intro = `import React from "react"`;
  const jsxFactory = `React.createElement`;
  const Fragment = `React.Fragment`;
  const { ast, imports, frontmatter, toc } = parse(source, {
    amp: !!options.amp,
  });

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
    import { compile } from "amdx-runner";
    export const frontmatter = ${JSON.stringify(frontmatter)};
    export const toc = ${JSON.stringify(toc)};

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
