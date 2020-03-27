import fs from "fs";
import path from "path";
import { rollup } from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
// @ts-ignore
import builtins from "rollup-plugin-node-builtins";
// @ts-ignore
import { mdxx } from "rollup-plugin-mdxx";
// @ts-ignore
import virtual from "@rollup/plugin-virtual";
import mkdirp from "mkdirp";
// @ts-ignore
import prettier from "prettier";

function formatJs(code: string) {
  return prettier.format(code, { parser: "babel" });
}

function formatHtml(code: string) {
  return prettier.format(code, { parser: "html" });
}

const argv = require("minimist")(process.argv);

const plugins = [
  builtins(),
  typescript({
    tsconfigOverride: {
      compilerOptions: {
        target: "es2020",
        module: "esnext",
        jsx: "react"
      }
    }
  }),
  nodeResolve(),
  commonjs(),
  mdxx()
];

async function main() {
  const { _: args, out, outdir, m, mode, ...others } = argv;
  const input = path.join(process.cwd(), argv._[2]);
  const outputMode = mode || m || "run";
  const ext = path.extname(input);
  if (args[2] == null) {
    throw new Error("File does not exists");
  }

  // Run with default
  if (outputMode === "run" && (ext === ".md" || ext === ".mdx")) {
    const bundle = await rollup({
      input: "__input.js",
      onwarn(_message) {},
      plugins: [
        virtual({ "__input.js": DEFAULT_RUNNING_CODE(input) }),
        ...plugins
      ]
    });
    const out = await bundle.generate({ ...others });
    // console.log(out);
    eval(out.output[0].code);
    return;
  }

  const bundle = await rollup({
    input,
    onwarn(_message) {},
    plugins
  });
  const rollupOutput = await bundle.generate({ ...others });
  switch (outputMode) {
    case "js": {
      if (outdir) {
        const outdirPath = path.join(process.cwd(), outdir);
        try {
          mkdirp.sync(outdirPath);
        } catch (err) {
          // already exists
        }
        for (const o of rollupOutput.output) {
          if (o.type === "chunk") {
            const outpath = path.join(outdirPath, o.fileName);
            fs.writeFileSync(outpath, formatJs(o.code));
            console.log("write >", outpath);
          }
        }
      } else if (out) {
        const code = rollupOutput.output[0].code;
        const outpath = path.join(process.cwd(), out);
        fs.writeFileSync(outpath, formatJs(code));
        console.log("write >", outpath);
      } else {
        console.log(formatJs(rollupOutput.output[0].code));
      }
      return;
    }
    case "run": {
      eval(rollupOutput.output[0].code);
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

async function run() {
  try {
    main();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
