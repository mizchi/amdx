// import React from "react";
import ReactDOMServer from "react-dom/server";
// @ts-ignore
import { compile } from "../../dist/compiler";
// @ts-ignore
import Foo from "./foo.mdx";

const el = compile(Foo, {});

// console.log(React, ReactDOMServer, Foo);
const out = ReactDOMServer.renderToString(el);
console.log(out);
