import React from "react";
import { TagList } from "./TagList";
export function TagPage(props: {
  tagName: string;
  pages: Array<{ slug: string; title: string }>;
}) {
  return (
    <>
      <div>
        <TagList tags={[props.tagName]} />
      </div>
      <div style={{ paddingTop: 10 }}>
        {props.pages.map((page) => {
          return (
            <div key={page.slug}>
              <a
                className="text-blue-500 hover:text-blue-800"
                href={`/${page.slug}`}
              >
                {page.title}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
