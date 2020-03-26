// import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/parser.ts",
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            module: "ESNext"
          }
        }
      }),
      nodeResolve({ preferBuiltins: true }),
      commonjs({
        include: ["src/**/*.ts", "node_modules/**", "../../node_modules/**"],
        namedExports: {
          "@babel/core": ["parse", "traverse", "transform"]
        }
      }),
      json()
      // terser()
    ],
    output: [
      {
        file: "dist/parser.mjs",
        format: "esm"
      },
      {
        file: "dist/parser.js",
        format: "cjs"
      }
    ]
  }
];
