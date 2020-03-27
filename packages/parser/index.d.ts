// WIP

export type ParsedImports = Array<{
  importPath: string;
  default: string | void;
  names: Array<{ local: string; imported: string }>;
}>;

export type ParsedExports = Array<any>;

export type ParseResult = {
  ast: any;
  imports: ParsedImports;
  exports: ParsedExports;
};
