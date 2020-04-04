import unified from "unified";
export const markCursorLine: unified.Plugin = (options: any = {}) => {
  return (ast: any, vfile: any) => {
    const curLine = vfile.data && vfile.data.cursor && vfile.data.cursor.line;
    const starts = ast.children.map((node: any) => node.position.start.line);
    // console.log("cursor line", curLine, starts);
    ast.children.forEach((node: any) => {
      const line = node.position.start.line;
      if (line === curLine) {
        if (node.data == null) {
          node.data = {};
        }
        if (node.data.hProperties == null) {
          node.data.hProperties = {};
        }

        const className = node.data.hProperties.className;
        if (className) {
          if (className instanceof Array) {
            node.data.hProperties.className.push("cursor-focused");
          } else {
            node.data.hProperties.className = [className, "cursor-focused"];
          }
        } else {
          node.data.hProperties.className = ["cursor-focused"];
        }
      }
    });
  };
};
