import { parse } from "mdxx-parser";

module.exports = function (source: string) {
  const { ast, imports } = parse(source, {});
  const stringifiedAst = JSON.stringify(ast);

  const names = [];
  let importsCode = "";
  for (const i of imports) {
    const name = i.default as string;
    importsCode += `import ${name} from "${i.importPath}";\n`;
    names.push(name);
  }
  const componentsCode = "{ " + names.join(",") + " }";
  const output = `module.exports = compile(${stringifiedAst}, { props, h: ${undefined}, Fragment: ${`React.Fragment`}, components: ${componentsCode}})`;
  return output;
};
