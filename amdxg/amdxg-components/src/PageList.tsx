import React from "react";
import { Page } from "./types";
import format from "date-fns/format";

export function PageList(props: { pages: Page[] }) {
  return (
    <div>
      {props.pages.map((page, index) => {
        const formatted = format(page.created as number, "yyyy/MM/dd/HH:mm");
        return (
          <div key={index}>
            <span>{formatted}</span>: &nbsp;
            <a
              className="underline text-blue-700 hover:no-underline"
              href={"/" + page.slug}
            >
              {page.title}
            </a>
          </div>
        );
      })}
    </div>
  );
}
