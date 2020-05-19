import React, { useState, useEffect } from "react";
// @ts-ignore
import * as amdx from "amdx";
import { compile } from "amdx-runner";
import vfile from "vfile";

export function Slide(props: { rawMdx: string }) {
  const file = vfile();
  file.contents = props.rawMdx;
  // @ts-ignore
  const parsed = amdx.parseFileToAst(file);
  parsed.childern = parsed.children.filter((node: any) => {
    return !["yaml", "import", "export"].includes(node.type);
  });

  const blocks = [];
  let breakCount = 0;
  for (const node of parsed.children) {
    if (node.type === "thematicBreak") {
      breakCount++;
    } else {
      if (blocks[breakCount] == null) {
        blocks[breakCount] = [node];
      } else {
        blocks[breakCount].push(node);
      }
    }
  }

  const documents = blocks.map((b) => {
    // @ts-ignore
    const hast = amdx.parseAstToHast({ type: "root", children: b });
    return compile(hast, {
      components: {},
      h: React.createElement,
      Fragment: React.Fragment,
      props: {},
    });
  });
  return <SlidePlayer documents={documents} />;
}

export function SlidePlayer(props: { documents: Array<any> }) {
  const [page, setPage] = useState(0);
  useEffect(() => {
    const onKeyDown = (ev: KeyboardEvent) => {
      console.log(ev);
      if (ev.key === "ArrowRight") {
        if (page < props.documents.length - 1) {
          setPage((n) => n + 1);
        }
      }

      if (ev.key === "ArrowLeft") {
        if (page > 0) {
          setPage((n) => n - 1);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [page]);
  return (
    <>
      <div>
        <button disabled={page <= 0} onClick={() => setPage((n) => n - 1)}>
          prev
        </button>
        |
        <button
          disabled={page >= props.documents.length - 1}
          onClick={() => setPage((n) => n + 1)}
        >
          next
        </button>
        &nbsp;
        <span>
          {page + 1}/{props.documents.length}
        </span>
      </div>
      <hr />
      <div
        style={{
          width: "100%",
          height: "60vh",
          padding: 20,
          overflow: "auto",
          fontSize: "2em",
          background: "#fee",
        }}
      >
        <div className="markdown-body">{props.documents[page]}</div>
      </div>
    </>
  );
}
