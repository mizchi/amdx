import React from "react";
import assert from "assert";
import ReactDOMServer from "react-dom/server";

// @ts-ignore
import { compile, RootNode, CompilerOptions } from "..";

function case1() {
  const el = compile(
    {
      type: "root",
      children: [
        {
          type: "jsx",
          value: {
            tagName: "div",
            props: {
              children: ["hello"]
            }
          }
        }
      ]
    } as RootNode,
    {
      components: {},
      h: React.createElement,
      Fragment: React.Fragment,
      props: {}
    } as CompilerOptions
  );
  const out = ReactDOMServer.renderToStaticMarkup(el as any);
  // console.log(out);
  assert.equal(out, "<div><div>hello</div></div>");
}

function case2() {
  const el = compile(
    {
      type: "root",
      children: [
        {
          type: "jsx",
          value: {
            tagName: "Foo",
            props: {
              children: ["hello"]
            }
          }
        }
      ]
    } as RootNode,
    {
      components: {
        Foo: ({ children }: { children: any }) => <div>foo: {children}</div>
      },
      h: React.createElement,
      Fragment: React.Fragment,
      props: {}
    } as CompilerOptions
  );
  const out = ReactDOMServer.renderToStaticMarkup(el as any);
  assert.equal(out, "<div><div>foo: hello</div></div>");
}

function withStyle() {
  const el = compile(
    {
      type: "root",
      children: [
        {
          type: "jsx",
          value: {
            tagName: "div",
            props: {
              style: "color: red;"
            }
          }
        }
      ]
    } as RootNode,
    {
      components: {
        Foo: ({ children }: { children: any }) => <div>foo: {children}</div>
      },
      h: React.createElement,
      Fragment: React.Fragment,
      props: {}
    } as CompilerOptions
  );
  const out = ReactDOMServer.renderToStaticMarkup(el as any);
  assert.equal(out, `<div><div style="color:red"></div></div>`);
}

function withClassName() {
  const el = compile(
    {
      type: "root",
      children: [
        {
          type: "jsx",
          value: {
            tagName: "div",
            props: {
              class: "hey"
            }
          }
        }
      ]
    } as RootNode,
    {
      components: {
        Foo: ({ children }: { children: any }) => <div>foo: {children}</div>
      },
      h: React.createElement,
      Fragment: React.Fragment,
      props: {}
    } as CompilerOptions
  );
  const out = ReactDOMServer.renderToStaticMarkup(el as any);
  assert.equal(out, `<div><div class="hey"></div></div>`);
}

function withAmpRewriter() {
  const el = compile(
    {
      type: "root",
      children: [
        {
          type: "element",
          tagName: "img",
          properties: { src: "/foo.img", alt: "foo" }
        }
      ]
    } as RootNode,
    {
      components: {
        // @ts-ignore
        img: (props: any) => React.createElement("amp-img", props)
        // Foo: ({ children }: { children: any }) => <div>foo: {children}</div>
      },
      h: React.createElement,
      Fragment: React.Fragment,
      props: {}
    } as CompilerOptions
  );
  const out = ReactDOMServer.renderToStaticMarkup(el as any);
  assert.equal(out, `<div><amp-img src="/foo.img" alt="foo"></amp-img></div>`);
}

function withClassName2() {
  const el = compile(
    {
      type: "root",
      children: [
        {
          type: "element",
          tagName: "span",
          properties: { className: ["token", "keyword"] },
          children: [{ type: "text", value: "const" }]
        }
      ]
    } as RootNode,
    {
      components: {},
      h: React.createElement,
      Fragment: React.Fragment,
      props: {}
    } as CompilerOptions
  );
  const out = ReactDOMServer.renderToStaticMarkup(el as any);
  console.log(out);
  // assert.equal(out, "<div><div>hello</div></div>");
}

[
  case1,
  case2,
  withStyle,
  withClassName,
  withAmpRewriter,
  withClassName2
].forEach(fn => fn());
