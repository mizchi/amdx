import React from "react";
export function Link(props: { href: string; children: React.ReactNode }) {
  return (
    <a className="text-blue-500 hover:text-blue-800" href={props.href}>
      {props.children}
    </a>
  );
}
