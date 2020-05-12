# AMDXG

Accelarated MDX

## Features

- AMP Friendly Output
- Opinionated remark settings
  - Highlight with `refract`
  - frontmatter
  - Gen `amp-img` from `img` with `{amp: true}` config
- Rich parser and thin runner to preprocess
- Worker Friendy: Compile to pure JSON to postMessage

## packages

- `amdx-loader`: webpack-loader
- `amdx`: parser by remark
- `amdx-runner`: runner for parsed json
- `amdx-cli`: `amdx` cli tools
- `rollup-plugin-amdx`: rollup plugin

## AMDXG

- `amdxg`: static site generator by amdx on minimum next.js
- `amdxg-components`: ssg components
- `amdxg-cli`: ssg components

## CLI

```bash
# install
$ npm install amdx-cli -g
```

## webpack loader

```js
module.exports = {
  module: {
    rules: [
      // add this rule
      {
        test: /\.mdx?/,
        loader: "amdx-loader",
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
        loader: "amdx-loader/lib/amp",
      },
    ],
  },
};
```

## rollup

```js
// rollup.config.js
import { amdx } from "rollup-plugin-amdx";
export default {
  // ...
  plugins: [amdx()],
};
```

## SSG

```bash
# install
$ npm install amdx-cli -g
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
$ amdx foo.md # output as html

# Write js
$ amdx index.tsx --mode js --out out.js
$ node out.js # dump js

# Write with chunk
$ amdx index.tsx --mode js --outdir out
$ node out/index.js
```

## API

```js
import React from "react";
import ReactDOM from "react-dom";

import { compile } from "amdx-runner";
import { parse } from "amdx";

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

`rollup-amdx-plugin` makes `.md` and `.mdx` loadable as react component.

```js
// rollup.config.js
import { rollup } from "rollup";
import { amdx } from "rollup-plugin-amdx";

export default {
  input: "index.mdx",
  output: {
    format: 'esm'
    file: "out.js"
  },
  plugins: [
    // your plugin...
    amdx()
  ]
};
```

index.mdx

```md
# Hello amdx

import Foo from "./foo.mdx" //

<Foo />
```

`rollup -c rollup.config.js`

## TODO

- [x] title
- [x] amp-img
- [x] Social Share button
- [x] CLI Scaffolding
- [x] Google Analytics
- [x] Header
- [x] Fix css on export
- [x] amdx-runner: amp option
- [x] amdxg Support `styled-components`
- [x] amdxg AMP Install Service Worker
- [x] amdxg Refactor layout css
- [x] amdxg `amp-img` fixed height
- [x] compiler: heading slug
- [x] compiler: toc
- [x] amdxg Fix css
- [x] amdxg Support amp-social-share
- [x] amdxg amdxg-cli
- [x] parser: Support amp-mathml
- [x] CI
- [x] amdxg Gen git history
- [x] amdxg Link to GitHub PR
- [x] amdxg-components: create
- [x] amdxg Render mdx on `pages/*.mdx` => auto gen /docs by getStaticProps
- [x] amdxg Gen RSS
- [ ] amdxg amp-script compiler or `new:script` boilerplate
- [ ] amdxg clickable anchor
- [ ] Rename to something
- [ ] Fix prism
- [ ] Fix amp-img
- [ ] Next 9.4 ssg fallback mode

## LICENSE

MIT
