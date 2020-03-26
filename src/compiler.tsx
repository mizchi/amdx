import React from "react";
import { MDXHast$ExportNode, MDXHast$ImportNode, Node } from "./types";
// @ts-ignore
import camelCaseCSS from "camelcase-css";
// @ts-ignore
import { paramCase } from "@mdx-js/util";
import styleToObject from "style-to-object";

export function compile(
  root: Node,
  options: {
    h: typeof React.createElement;
    Fragment: typeof React.Fragment;
    components: { [key: string]: any };
  }
): React.ReactElement | string {
  const { h, Fragment, components } = options;
  return _compile(root);
  function _compile(node: Node): React.ReactElement | string {
    // @ts-ignore
    if (node.properties != null) {
      // Turn style strings into JSX-friendly style object
      // @ts-ignore
      if (typeof node.properties.style === "string") {
        let styleObject: { [key: string]: any } = {};
        // @ts-ignore
        styleToObject(node.properties.style, (name: string, value: any) => {
          styleObject[camelCaseCSS(name)] = value;
        });
        // @ts-ignore
        node.properties.style = styleObject;
      }

      // Transform class property to JSX-friendly className
      // @ts-ignore
      if (node.properties.class) {
        // @ts-ignore
        node.properties.className = node.properties.class;
        // @ts-ignore
        delete node.properties.class;
      }

      // AriaProperty => aria-property
      // dataProperty => data-property
      const paramCaseRe = /^(aria[A-Z])|(data[A-Z])/;
      // @ts-ignore
      node.properties = Object.entries(node.properties).reduce(
        (properties, [key, value]) =>
          Object.assign({}, properties, {
            [paramCaseRe.test(key) ? paramCase(key) : key]: value
          }),
        {}
      ) as any;
    }

    switch (node.type) {
      case "jsx": {
        return _toNode(node.value.tagName, node.value.props);
        function _toNode(
          tagName: string,
          props: {
            children?: Array<{ tagName: string; props: any }>;
            [k: string]: any;
          }
        ): React.ReactElement | string {
          const { children, ...others } = props || {};
          return h(
            options.components[tagName],
            others,
            ...(children ? children.map(c => _toNode(c.tagName, c.props)) : [])
          );
        }
      }
      case "text": {
        return node.value;
      }
      case "element": {
        return h(node.tagName, node.properties, ...node.children.map(_compile));
      }
      case "root": {
        const importNodes: MDXHast$ImportNode[] = [];
        const exportNodes: MDXHast$ExportNode[] = [];
        const nodes = [];
        // let layout;
        for (const child of node.children) {
          if (child.type === "import") {
            importNodes.push(child);
            continue;
          }
          if (child.type === "export") {
            if (child.default) {
              continue;
            }
            exportNodes.push(child);
            continue;
          }
          nodes.push(child);
        }
        return h(
          "div",
          {},
          ...nodes.map((child, key) => {
            return <Fragment key={key}>{_compile(child)}</Fragment>;
          })
        );
      }
      default: {
        // @ts-ignore
        throw new Error(`unknown node: ${node.type}`);
      }
    }
  }
}
