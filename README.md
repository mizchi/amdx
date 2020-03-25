# MDXX

WIP

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

## LICENSE

MIT
