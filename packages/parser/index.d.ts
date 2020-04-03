import * as types from "mdxx-types";

// TODO
export type ParseOptions = {};

export function parse(mdx: string, options?: ParseOptions): ParseResult;

export type ParsedImports = Array<{
  importPath: string;
  default: string | void;
  names: Array<{ local: string; imported: string }>;
}>;

export type ParsedExports = Array<any>;

export type ParseResult = {
  ast: types.RootNode;
  imports: ParsedImports;
  exports: ParsedExports;
};
