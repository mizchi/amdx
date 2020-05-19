import React from "react";
export function Link(props: { href: string; children: React.ReactNode }) {
  return (
    <a className="underline text-blue-700 hover:no-underline" href={props.href}>
      {props.children}
    </a>
  );
}
