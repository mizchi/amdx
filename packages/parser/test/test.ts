// @ts-ignore
// import { parse } from "./dist/parser.js";
// import { parse } from "../dist/parser.js";
import { parse } from "../src/parser";

import assert from "assert";

function withImport() {
  const parsed = parse(`
import Foo from "./foo";
import Bar from "./bar";
  `);
  assert.equal(parsed.imports.length, 2);
}

function withImportAndJsx() {
  // can parse
  const parsed = parse(`import Foo from "./foo";

<Foo />

<Bar />

<detail>
  <summary>aaa</summary>
  HogeFuga
</detail>

**xxx**

<div>
  <X />
  <Y />
</div>
  `);
  // console.log(parsed.ast.children);
}

function withCodeBlock() {
  // can parse
  const parsed = parse(`\`\`\`js:index.js
const x = 3
\`\`\`
  `);
  // @ts-ignore
  const codeNode = parsed.ast.children[0].children[0];
  // assert.equal(codeNode.properties.tagName, "code");
  assert.deepEqual(codeNode.properties.className, ["language-js"]);
}

function withCodeBlock2() {
  // can parse
  const parsed = parse(`\`\`\`
const x = 3
\`\`\`
  `);
  // console.log("test with code", parsed.ast.children[0].children[0]);
  // assert.equal(Object.values(parsed.highlights).length, 1);
  // assert.equal(Object.values(parsed.highlights)[0].nodes.length, 5);
}

// import vfile from "vfile";
// do not pass yet
function withYamlFrontmatter() {
  // can parse
  // const file = vfile();
  const parsed = parse(
    `---
title: foo
tags: [a, b, c]
---

aaaa
`
  );
  assert.deepEqual(parsed.frontmatter, {
    title: "foo",
    tags: ["a", "b", "c"],
  });
}

// do not pass yet
function withMath() {
  const parsed = parse(`
# MathTest

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$

`);
  assert.ok(JSON.stringify(parsed.ast.children).includes("math-display"));
}

function withNormalizeHeading1() {
  const parsed = parse(`# foo\n## bar`);
  // console.log(parsed.ast.children);
  // @ts-ignore
  assert.equal(parsed.ast.children[0].tagName, "h2");
  // @ts-ignore
  assert.equal(parsed.ast.children[2].tagName, "h3");
}

function withNormalizeHeading2() {
  const parsed = parse(`## foo\n## bar`);
  // @ts-ignore
  assert.equal(parsed.ast.children[0].tagName, "h2");
  // @ts-ignore
  assert.equal(parsed.ast.children[2].tagName, "h2");
}

withNormalizeHeading1();

[
  withNormalizeHeading1,
  withNormalizeHeading2,
  withImport,
  withImportAndJsx,
  withCodeBlock,
  withCodeBlock2,
  withYamlFrontmatter,
  withMath,
].forEach((fn) => fn());

// // withYamlFrontmatter();
