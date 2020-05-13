import React from "react";
import { TagList } from "./TagList";
import { Link } from "./Link";
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
              <Link href={`/${page.slug}`}>{page.title}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
