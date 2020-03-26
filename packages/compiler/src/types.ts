export type Plugin = any;
export type Compiler = {
  use: (fn: any, options?: MDXOptions) => any;
  process(input: { contents: string; path?: string }, options?: any): any;
  processSync(input: { contents: string; path?: string }, options?: any): any;
};

export type MDXOptions = {
  filepath?: string;
  footnotes?: boolean;
  remarkPlugins?: Array<Plugin>;
  rehypePlugins?: Array<Plugin>;
  compilers?: Array<Compiler>;
};

// export type MDXNode = MDAST.Content;
export type Creator = Function;

// MDXAST
export type MDXHast$Node = {
  type: string;
  children?: MDXHastNode[];
  properties?: MDXHast$Properties;
};

export interface MDXHast$Properties {
  [key: string]: string;
  style?: any;
}

interface MDXHast$TextNode extends MDXHast$Node {
  type: "text";
  value: string;
}

interface MDXHast$CommentNode extends MDXHast$Node {
  type: "comment";
  value: string;
}

export interface MDXHast$ExportNode extends MDXHast$Node {
  type: "export";
  default: any;
  value: any;
}

export interface MDXHast$ImportNode extends MDXHast$Node {
  type: "import";
  value: any;
}

interface MDXHast$ElementNode extends MDXHast$Node {
  type: "element";
  tagName: string;
}

interface MDXHast$JSXNode extends MDXHast$Node {
  type: "jsx";
  value: any;
}

interface MDXHast$RootNode extends MDXHast$Node {
  type: "root";
  properties: MDXHast$Properties;
  children: MDXHastNode[];
}

export type MDXHastNode =
  | MDXHast$RootNode
  | MDXHast$ElementNode
  | MDXHast$ImportNode
  | MDXHast$ExportNode
  | MDXHast$TextNode
  | MDXHast$CommentNode
  | MDXHast$JSXNode;

export type Node =
  | {
      type: "element";
      tagName: string;
      properties: any;
      children: Node[];
      position: any;
    }
  | {
      type: "text";
      value: string;
    }
  | {
      type: "comment";
      value: string;
    }
  | {
      type: "import";
      value: string;
    }
  | {
      type: "export";
      value: string;
      default: boolean;
    }
  | {
      type: "jsx";
      value: {
        tagName: string;
        props: any;
      };
      position: any;
    }
  | {
      type: "root";
      children: Node[];
    };
