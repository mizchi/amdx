export type ImportNode = {
  type: "import";
  value: string;
};

export type ExportNode = {
  type: "export";
  value: string;
};

export type JSXNode = {
  type: "jsx";
  value: {
    tagName: string;
    props: any;
  };
  position: any;
};

export type ElementNode = {
  type: "element";
  tagName: string;
  properties: any;
  children: Node[];
  position: any;
};

export type TextNode = {
  type: "text";
  value: string;
};
export type CommentNode = {
  type: "comment";
  value: string;
};

export type RootNode = {
  type: "root";
  children: Node[];
};

export type Node =
  | ElementNode
  | TextNode
  | CommentNode
  | ImportNode
  | ExportNode
  | JSXNode
  | RootNode;

export type CompilerOptions = {
  props?: { components?: { [key: string]: any } };
  h: typeof Factory;
  Fragment: any;
  components: { [key: string]: any };
};

export function Factory(tag: string | any, props?: any, children?: any): any;
export function compile(ast: RootNode, options: CompilerOptions): any;
