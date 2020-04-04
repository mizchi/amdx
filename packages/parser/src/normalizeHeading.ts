import unified from "unified";
import visit from "unist-util-visit";

export const normalizeHeading: unified.Plugin = () => {
  return (tree: any) => {
    const headings = tree.children.filter((t: any) => t.type === "heading");
    const min = Math.min(...headings.map((t: any) => t.depth));
    if (min === 1) {
      headings.forEach((node: any) => {
        node.depth = node.depth + 1;
      });
    }
  };
};
