# MDXX

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
$ mdxx foo.md # output html

# Write js
$ mdxx index.tsx --mode js --out out.js
$ node out.js

# Write with chunk
$ mdxx index.tsx --mode js --outdir out
$ node out/index.js

```

## LICENSE

MIT
