const parser = require("../dist/parser");

const emptyResult = parser.parse(`
import React from 'react'
import Bar from "./bar.mdx";
import Baz from "./baz.mdx";
import Math from "./math.mdx";
import Code from "./code.mdx";

# Hello Foo

<Bar />

---

# Expand Baz

<Baz />

---

---

<Math />

---

<Code />

## hello`);

console.log(JSON.stringify(emptyResult));
