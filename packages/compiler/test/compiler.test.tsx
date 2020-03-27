import React from "react";
import ReactDOMServer from "react-dom/server";

// @ts-ignore
import { compile, RootNode, CompilerOptions } from "..";

const el = compile(
  {
    type: "root",
    children: [
      {
        type: "jsx",
        value: {
          tagName: "div",
          props: {
            children: ["hello"]
          }
          // children: ["hello"]
        }
      }
    ]
  } as RootNode,
  {
    components: {},
    h: React.createElement,
    Fragment: React.Fragment,
    props: {}
  } as CompilerOptions
);
const out = ReactDOMServer.renderToStaticMarkup(el);
console.log(out);
