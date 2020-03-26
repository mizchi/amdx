// @ts-ignore
// import { parse } from "./dist/parser.js";
import { parse } from "./dist/parser.js";

const parsed = parse(`

import Foo from "./foo";

# hello

foo


<Div />
`);

console.log(parsed);
