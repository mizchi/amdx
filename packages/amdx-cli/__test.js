import Test from "./__test.md";
import React from "react";
import ReactDOMServer from "react-dom/server";

const out = ReactDOMServer.renderToStaticMarkup(React.createElement(Test));
console.log(out);
