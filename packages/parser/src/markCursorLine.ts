import unified from "unified";
export const markCursorLine: unified.Plugin = (options: any = {}) => {
  return (ast: any, vfile: any) => {
    const curLine = vfile.data && vfile.data.cursor && vfile.data.cursor.line;
    ast.children.forEach((node: any) => {
      const lineStart = node.position.start.line;
      const lineEnd = node.position.end.line;
      if (lineStart <= curLine && curLine <= lineEnd) {
        // assign class
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
