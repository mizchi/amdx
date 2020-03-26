import path from "path";
import { rollup } from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
// @ts-ignore
import builtins from "rollup-plugin-node-builtins";
// @ts-ignore
import alias from "@rollup/plugin-alias";
import { mdxx } from "./rollup-plugin-mdxx";
// @ts-ignore
import Minimist from "minimist";
// @ts-ignore
import virtual from "@rollup/plugin-virtual";

const argv = Minimist(process.argv);

const plugins = [
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
];

async function main() {
  const { _: args, file, m, mode, ...others } = argv;
  const input = path.join(process.cwd(), argv._[2]);
  const outputMode = mode || m || "run";
  const ext = path.extname(input);
  if (args[2] == null) {
    throw new Error("File does not exists");
  }

  // Run with default
  if ((outputMode === "run" && ext === ".md") || ext === ".mdx") {
    const bundle = await rollup({
      input: "__input.js",
      onwarn(_message) {},
      plugins: [
        virtual({ "__input.js": DEFAULT_RUNNING_CODE(input) }),
        ...plugins
      ]
    });
    const out = await bundle.generate({ ...others });
    eval(out.output[0].code);
    return;
  }

  const bundle = await rollup({
    input,
    onwarn(_message) {},
    plugins
  });
  const out = await bundle.generate({ ...others });
  switch (mode || m || "run") {
    case "js": {
      console.log(out.output[0].code);
      return;
    }
    case "run": {
      eval(out.output[0].code);
      return;
    }
  }
}

const DEFAULT_RUNNING_CODE = (entryPath: string) => `
import React from "react";
import ReactDOMServer from "react-dom/server";
import Entry from "${entryPath}";
const out = ReactDOMServer.renderToStaticMarkup(React.createElement(Entry));
console.log(out);
`;

main();
