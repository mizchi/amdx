import unified from "unified";
// @ts-ignore
import Slugger from "github-slugger";

export const normalizeHeading: unified.Plugin = () => {
  return (tree: any, vfile: any) => {
    const headings = tree.children.filter((t: any) => t.type === "heading");
    const min = Math.min(...headings.map((t: any) => t.depth));
    if (min === 1) {
      headings.forEach((node: any) => {
        node.depth = node.depth + 1;
      });
    }
    const slugger = new Slugger();

    const toc = headings.map((h: any) => {
      const title = h.children[0].value;
      const encoded = Buffer.from(title).toString("base64");
      return {
        depth: h.depth,
        id: slugger.slug(encoded),
        title,
      };
    });
    headings.forEach((h: any, index: number) => {
      h.data = { ...h.data };
      h.data.hProperties = { ...h.data.hProperties };
      h.data.hProperties.id = toc[index].id;
    });
    vfile.data.toc = toc;
  };
};
