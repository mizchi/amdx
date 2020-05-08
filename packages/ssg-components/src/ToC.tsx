import React from "react";

export function ToC(props: {
  toc: Array<{ id: string; depth: number; title: string }>;
}) {
  return (
    <details>
      <summary>ToC</summary>
      <div>
        {props.toc.map((heading) => {
          return (
            <div key={heading.id}>
              <a href={`#${heading.id}`}>
                {"■".repeat(heading.depth - 1)}
                &nbsp;
                {heading.title}
              </a>
            </div>
          );
        })}
      </div>
    </details>
  );
}
