# MDXX

MDX eXtended

## Spec

- Parse to JSON for WebWorker
- Compile to react component (TODO: support other compiler like preact or vue)

## packages

- `mdxx-loader`: webpack-loader
- `rollup-plugin-mdxx`: rollup plugin
- `mdxx-parser`: parser by remark
- `mdxx-compiler`: runner for parsed json
- `mdxx-cli`: `mdxx` cli tools
- `mdxx-ssg`: static site generator by mdxx on minimum next.js

## CLI

```bash
# install
$ npm install mdxx-cli -g
```

## webpack loader

```js
module.exports = {
  module: {
    rules: [
      // add this rule
      {
        test: /\.mdx?/,
        loader: "mdxx-loader",
      },
    ],
  },
};
```

for AMP (transform `img` to `amp-img`)

```js
module.exports = {
  module: {
    rules: [
      // add this rule
      {
        test: /\.mdx?/,
        loader: "mdxx-loader/lib/amp",
      },
    ],
  },
};
```

## rollup

```js
// rollup.config.js
import { mdxx } from "rollup-plugin-mdxx";
export default {
  // ...
  plugins: [mdxx()],
};
```

## SSG

```bash
# install
$ npm install mdxx-cli -g
```

## Example

```md
<!-- bar.mdx -->

import Bar from "./bar"

# Bar
```

```md
<!-- foo.mdx -->

import Bar from "./bar"

# Hello from Foo

<Bar />
```

```tsx
import React from "react";
import ReactDOM from "react-dom/server";
import Foo from "./foo.mdx";

const str = ReactDOMServer.renderToString(<Foo />);
console.log(str);
```

```bash
# run with js
$ mdxx foo.md # output as html

# Write js
$ mdxx index.tsx --mode js --out out.js
$ node out.js # dump js

# Write with chunk
$ mdxx index.tsx --mode js --outdir out
$ node out/index.js
```

## API

```js
import React from "react";
import ReactDOM from "react-dom";

import { compile } from "mdxx-compiler";
import { parse } from "mdxx-parser";

const ast = parse(`# hello`);

function App(props) {
  return const el = compile(ast, {
    props,
    components: {},
    h: React.createElement,
    Fragment: React.Fragment
  });
}

ReactDOM.render(<App />, document.querySelector("#main"));
```

## As rollup plugin

`rollup-mdxx-plugin` makes `.md` and `.mdx` loadable as react component.

```js
// rollup.config.js
import { rollup } from "rollup";
import { mdxx } from "rollup-plugin-mdxx";

export default {
  input: "index.mdx",
  output: {
    format: 'esm'
    file: "out.js"
  },
  plugins: [
    // your plugin...
    mdxx()
  ]
};
```

index.mdx

```md
# Hello mdxx

import Foo from "./foo.mdx" //

<Foo />
```

`rollup -c rollup.config.js`

## TODO

- [x] title
- [x] amp-img
- [x] Social Share button
- [x] CLI Scaffolding
- [ ] Service Worker
- [ ] Gen git history
- [ ] amp-img fixed height
- [ ] Render mdx on `pages/*.mdx`
- [ ] amp-script
- [ ] Support preact

## LICENSE

MIT
