import unified from "unified";
import visit from "unist-util-visit";

// @ts-ignore
import refractor from "refractor/core.js";
refractor.register(require("refractor/lang/javascript.js"));
refractor.register(require("refractor/lang/jsx.js"));
refractor.alias({ javascript: ["js"] });

refractor.register(require("refractor/lang/typescript.js"));
refractor.register(require("refractor/lang/tsx.js"));
refractor.alias({ typescript: ["ts"] });

refractor.register(require("refractor/lang/markdown.js"));
refractor.alias({ markdown: ["md", "mdx"] });

refractor.register(require("refractor/lang/markup.js"));
refractor.alias({ markup: ["html"] });

refractor.register(require("refractor/lang/ruby.js"));
refractor.register(require("refractor/lang/python.js"));
refractor.register(require("refractor/lang/lisp.js"));
refractor.register(require("refractor/lang/r.js"));
refractor.register(require("refractor/lang/rust.js"));
refractor.register(require("refractor/lang/go.js"));
refractor.register(require("refractor/lang/haskell.js"));
refractor.register(require("refractor/lang/scala.js"));
refractor.register(require("refractor/lang/scss.js"));
refractor.register(require("refractor/lang/css.js"));
refractor.register(require("refractor/lang/c.js"));
refractor.register(require("refractor/lang/cpp.js"));
refractor.register(require("refractor/lang/csharp.js"));
refractor.register(require("refractor/lang/java.js"));
refractor.register(require("refractor/lang/kotlin.js"));

export const highlighter: unified.Plugin = (options: any = {}) => {
  return tree => {
    visit(tree, "code", (node: any, index, parent) => {
      const [lang, filename] = (node.lang || "").split(":");
      if (lang) {
        node.lang = lang;
        if (node.data == null) {
          node.data = {};
        }
        node.data.hName = "pre";
        node.data.hProperties = { filename };
        node.data.hChildren = [
          {
            type: "element",
            tagName: "code",
            properties: {
              className: [
                "language-" + lang,
                filename ? "file-" + filename : "file"
              ]
            },
            children: refractor.highlight(node.value, "javascript")
          }
        ];
      }
    });
  };
};
