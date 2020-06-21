import React from "react";
import { ToC } from "./ToC";
import { History } from "./History";
import { SocialShare } from "./SocialShare";
import { AmdxgConfig } from "./types";
import { TagList } from "./TagList";
import format from "date-fns/format";

export function Article(props: {
  ssgConfig: AmdxgConfig;
  children: React.ReactNode;
  title: string;
  toc?: Array<{ id: string; depth: number; title: string }>;
  createdAt?: number;
  history?: Array<{
    hash: string;
    author: string;
    message: string;
    date: string;
  }>;
  tags?: string[];
}) {
  return (
    <>
      <div className="rounded shadow-lg antialiased">
        <div className="markdown-body px-6">
          <div>
            <h1>{props.title}</h1>
            <p>
              {props.tags && <TagList tags={props.tags} />}
              by{" "}
              <a href={props.ssgConfig.authorLink}>{props.ssgConfig.author}</a>
              &nbsp;
              {props.createdAt && (
                <>created at {format(props.createdAt, "yyyy/MM/dd/HH:mm")} </>
              )}
            </p>
            {props.toc && <ToC toc={props.toc} />}
          </div>
          {props.children}
          <div className="py-4">
            {props.history && (
              <History
                repository={props.ssgConfig.repository}
                history={props.history}
              />
            )}
          </div>
        </div>
        {props.ssgConfig.socialShare && (
          <SocialShare {...props.ssgConfig.socialShare} />
        )}
      </div>
    </>
  );
}
