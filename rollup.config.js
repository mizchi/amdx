// import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

const plugins = [
  typescript({
    tsconfigOverride: {
      compilerOptions: {
        module: "ESNext"
      }
    }
  }),
  nodeResolve({ preferBuiltins: true }),
  commonjs({
    include: ["src/**/*.ts", "node_modules/**/*.js"],
    namedExports: {
      "@babel/core": ["parse"]
    }
  }),
  json(),
  terser()
];

export default [
  {
    input: "src/parser.ts",
    plugins,
    output: {
      file: "dist/parser.js",
      format: "esm"
    }
  },
  {
    input: "src/compiler.tsx",
    plugins,
    output: {
      file: "dist/compiler.js",
      format: "esm"
    }
  }
];
