import React from "react";
import ReactDOMServer from "react-dom/server";
import { compile } from "./compiler";
import { parse } from "./parser";
import { MDXOptions } from "./types";

function main(mdx: string, options: MDXOptions = {}) {
  const { ast, imports, exports } = parse(mdx, options);

  const ret = compile(ast, {
    h: React.createElement,
    Fragment: React.Fragment,
    components: {
      Foo: () => <>Foo</>,
      X: () => <>X</>,
      Y: (props: any) => <>Y: {props.children}</>,
      Z: () => <>Z</>
    }
  });

  console.log("imports", imports);

  // @ts-ignore
  console.log(ReactDOMServer.renderToString(ret));
}

const content = `
import Foo from "./foo";
import {A, B} from "./bar";

# hoge

ああああ

日本語入力段落2
aaueao


<Foo value={33} x={1} y="2" checked />

<Y><Z/></Y>

\`\`\`js
var x = 3;
\`\`\`


`;

// @ts-ignore
main(content);
