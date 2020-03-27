import React from "react";
import { Node, ImportNode, ExportNode } from "../index";
// @ts-ignore
import camelCaseCSS from "camelcase-css";
// @ts-ignore
import { paramCase } from "@mdx-js/util";
import styleToObject from "style-to-object";

function convertStyleStringToObject(style: string): any {
  let styleObject: { [key: string]: any } = {};
  // @ts-ignore
  styleToObject(style, (name: string, value: any) => {
    styleObject[camelCaseCSS(name)] = value;
  });
  return styleObject;
}

const paramCaseRe = /^(aria[A-Z])|(data[A-Z])/;
function toProps(props: any) {
  if (typeof props.style === "string") {
    props.style = convertStyleStringToObject(props.style);
  }
  if (props.class) {
    props.className = props.class;
    delete props.class;
  }
  return Object.entries(props).reduce((acc, [key, value]) => {
    return { ...acc, [paramCaseRe.test(key) ? paramCase(key) : key]: value };
  }, {});
}

export function compile(
  root: Node,
  {
    props = {},
    h,
    Fragment,
    components
  }: {
    props?: { components?: { [key: string]: any } };
    h: typeof React.createElement;
    Fragment: typeof React.Fragment;
    components: { [key: string]: any };
  }
): React.ReactElement | string {
  return _compile(root);
  function _compile(node: Node): React.ReactElement | string {
    // @ts-ignore
    if (node.properties != null) {
      // @ts-ignore
      node.properties = toProps(node.properties);
    }

    function resolveComponent(tagName: string) {
      // direct props
      if (components[tagName]) {
        return components[tagName];
      }

      // Base root props
      if (props && props.components && props.components[tagName]) {
        return props.components[tagName];
      }
      // default root
      return tagName;
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
            resolveComponent(tagName),
            toProps(others),
            ...(children
              ? children.map(c => {
                  if (typeof c === "string") {
                    return c;
                  }
                  return _toNode(c.tagName, c.props);
                })
              : [])
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
        const importNodes: ImportNode[] = [];
        const exportNodes: ExportNode[] = [];
        const nodes = [];
        // let layout;
        for (const child of node.children) {
          if (child.type === "import") {
            importNodes.push(child);
            continue;
          }
          if (child.type === "export") {
            // if (child.default) {
            //   continue;
            // }
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
