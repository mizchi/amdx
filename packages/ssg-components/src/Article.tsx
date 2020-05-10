import React from "react";
import Head from "next/head";
import { ToC } from "./ToC";
import { History } from "./History";
import { SocialShare } from "./SocialShare";
import { SsgConfig } from "./types";

export function Article(props: {
  ssgConfig: SsgConfig;
  children: React.ReactNode;
  title: string;
  toc?: Array<{ id: string; depth: number; title: string }>;
  history?: Array<{
    hash: string;
    author: string;
    message: string;
    date: string;
  }>;
}) {
  return (
    <>
      <Head>
        <title>
          {props.title} - {props.ssgConfig.siteName}
        </title>
      </Head>
      <div className="rounded shadow-lg antialiased">
        <div className="markdown-body px-6">
          <div className="">
            <h1>{props.title}</h1>
            <p>
              by{" "}
              <a href={props.ssgConfig.authorLink}>{props.ssgConfig.author}</a>
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
