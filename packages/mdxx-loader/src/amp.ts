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
  const importedNames = names.join(",");

  const ampComponents = `
    ${importedNames.length > 0 ? "," : ""} img: function(props) {
      const [_alt, wxh] = props.alt.split(":");
      const [width, height] = wxh ? wxh.split("x") : [];

      const newProps = Object.assign(
        {},
        props,
        {
          alt: _alt,
          // layout: "responsive", // TODO: broken
          width: width,
          height: height,
          style: { display: "inline-block" }
        }
      );
      return React.createElement("amp-img", newProps);
    }
  `;
  const componentsCode = `{ ${importedNames}${ampComponents} }`;

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
