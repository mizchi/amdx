import React from "react";

export function TagList(props: { tags: string[] }) {
  return (
    <>
      {props.tags.map((tag, index) => {
        return (
          <a
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            href={"/tags/" + tag}
            key={index}
          >
            {tag}
          </a>
        );
      })}
    </>
  );
}
