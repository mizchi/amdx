import { parse } from "../dist/parser.mjs";
// const parser = require("../dist/parser.js");
// const parser = require("../src/parser");

console.log(
  parse(`
# hello

import X from "./x"

<X />


aaa
`)
);
