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
