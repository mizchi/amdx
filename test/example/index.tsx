// import React from "react";
import React from "react";
import ReactDOMServer from "react-dom/server";
// @ts-ignore
import Foo from "./foo.mdx";

const out = ReactDOMServer.renderToString(<Foo />);
console.log(out);
