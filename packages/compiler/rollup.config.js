import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/compiler.tsx",
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            target: "es2019",
            module: "ESNext",
          },
        },
      }),
      nodeResolve({ preferBuiltins: true }),
      commonjs({
        include: ["src/**/*.ts", "node_modules/**", "../../node_modules/**"],
      }),
      json(),
      terser(),
    ],
    output: [
      {
        file: "dist/compiler.mjs",
        format: "esm",
      },
      {
        file: "dist/compiler.js",
        format: "cjs",
      },
    ],
  },
];
