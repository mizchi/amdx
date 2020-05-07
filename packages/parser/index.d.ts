import * as types from "mdxx-types";

export type Cursor = {
  line: number;
  colomn?: number;
};

// TODO
export type ParseOptions = {
  cursor?: Cursor;
  amp?: boolean;
};

export function parse(mdx: string, options?: ParseOptions): ParseResult;

export type ParsedImports = Array<{
  importPath: string;
  default: string | void;
  names: Array<{ local: string; imported: string }>;
}>;

export type ParsedExports = Array<any>;

export type ParseResult = {
  ast: types.RootNode;
  toc: Array<{ id: string; depth: number }>;
  frontmatter: object | null;
  imports: ParsedImports;
  exports: ParsedExports;
  errors: string[];
};
