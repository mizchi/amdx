import fs from "fs";
import { Plugin } from "rollup";
import { parse } from "./parser";

export const mdxx = () => {
  return {
    load(id: string) {
      if (id.endsWith(".mdx")) {
        const code = fs.readFileSync(id).toString();
        const { ast, imports } = parse(code, {});
        let first = `export default ${JSON.stringify(ast)}`;
        return `${first}\n`;
        // return "export default 1";
      }
    }
  } as Plugin;
};
