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

# run with js
$ mdxx index.tsx -m js > foo.js
$ node foo.js
```

## LICENSE

MIT
