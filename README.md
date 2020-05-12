# AMDX

Accelarated MDX

## Features

- MDX to AMP
- AMP Friendly Output
- Opinionated remark settings

  - Highlight with `refract`
  - frontmatter
  - Gen `amp-img` from `img` with `{amp: true}` config
  - Gen `amp-mathml` from `$$ ~ $$`

- Rich parser and thin runner to preprocess
- Worker Friendy: Compile to pure JSON to postMessage

## AMDX document example

Use `.mdx` extension to highlight

```md
<!-- foo.mdx -->

import Bar from "./bar"

# Hello from Foo

<Bar />
```

```md
<!-- bar.mdx -->

import Bar from "./bar"

# Bar
```

render foo.mdx (with amdx-loader/rollup-plugin-amdx)

```tsx
import React from "react";
import ReactDOM from "react-dom/server";
import Foo from "./foo.mdx";

const str = ReactDOMServer.renderToString(<Foo />);
console.log(str);
```

## packages

- `amdx-loader`: webpack-loader
- `amdx`: parser and compiler by remark
- `amdx-runner`: runner for parsed json
- `amdx-cli`: `amdx` cli tools
- `rollup-plugin-amdx`: rollup plugin

## AMDXG: Static Site generator with next.js

- `amdxg-docs`: Doc by amdx on `next.js`
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

## rollup

```js
// rollup.config.js
import { amdx } from "rollup-plugin-amdx";
export default {
  // ...
  plugins: [amdx()],
};
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
- [x] Rename to something => amdx
- [ ] amdxg amp-script compiler or `new:script` boilerplate
- [ ] amdxg clickable anchor
- [ ] Fix prism
- [ ] Fix amp-img
- [ ] Next 9.4 ssg fallback mode

## LICENSE

MIT
