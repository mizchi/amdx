import path from "path";
import fs from "fs";
import { rollup, Plugin } from "rollup";
import { parse } from "../src/parser";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
// @ts-ignore
import builtins from "rollup-plugin-node-builtins";
import { mdxx } from "../src/rollup-plugin-mdxx";

// const plugin = () => {
//   return {
//     load(id: string) {
//       if (id.endsWith(".mdx")) {
//         const code = fs.readFileSync(id).toString();
//         const { ast, imports } = parse(code, {});
//         let first = `export default ${JSON.stringify(ast)}`;
//         return `${first}\n`;
//         // return "export default 1";
//       }
//     }
//   } as Plugin;
// };

async function main() {
  const bundle = await rollup({
    input: path.join(__dirname, "example/index.tsx"),
    plugins: [builtins(), typescript(), nodeResolve(), commonjs(), mdxx()]
  });
  // const out = await bundle.generate({ format: "esm" });
  // console.log(out.output[0].code);

  await bundle.write({ format: "iife", file: "example/out/bundle.js" });
  // console.log(out.output[0].code);
}

main();
