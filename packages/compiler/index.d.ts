export * from "mdxx-types";
import { RootNode } from "mdxx-types";

export type CompilerOptions = {
  props?: { components?: { [key: string]: any } };
  h: typeof Factory;
  Fragment: any;
  components: { [key: string]: any };
};

export function Factory(tag: string | any, props?: any, children?: any): any;
export function compile(ast: RootNode, options: CompilerOptions): any;
