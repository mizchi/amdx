import path from "path";
// import fs from "fs";
import { rollup } from "rollup";
// import { parse } from "../src/parser";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
// @ts-ignore
import builtins from "rollup-plugin-node-builtins";
// @ts-ignore
import alias from "@rollup/plugin-alias";
import { mdxx } from "../src/rollup-plugin-mdxx";

async function main() {
  const bundle = await rollup({
    input: path.join(__dirname, "example/index.tsx"),
    plugins: [
      alias({
        entries: [
          {
            find: "mdxx-compiler",
            replacement: path.join(__dirname, "../dist/compiler.js")
          }
        ]
      }),
      builtins(),
      typescript(),
      nodeResolve(),
      commonjs(),
      mdxx()
    ]
  });
  // const out = await bundle.generate({ format: "esm" });
  // console.log(out.output[0].code);

  await bundle.write({ format: "iife", file: "example/out/bundle.js" });
  console.log("---- done ----");
  // console.log(out.output[0].code);
}

main();
