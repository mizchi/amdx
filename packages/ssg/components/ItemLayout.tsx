import { Layout } from "./Layout";
import Head from "next/head";
// import ssgConfig from "../mdxx-ssg.json";
import { ToC } from "./ToC";
import { History } from "./History";
import { SocialShare } from "./SocialShare";
import { SsgConfig } from "./types";

export function ItemLayout(props: {
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
      <Layout ssgConfig={props.ssgConfig}>
        <div className="markdown-body">
          <h1>{props.title}</h1>
          <p>
            by <a href={props.ssgConfig.authorLink}>{props.ssgConfig.author}</a>
          </p>
          {props.toc && <ToC toc={props.toc} />}

          {props.children}
          {props.history && (
            <History
              repository={props.ssgConfig.repository}
              history={props.history}
            />
          )}
        </div>
        {props.ssgConfig.socialShare && (
          <SocialShare {...props.ssgConfig.socialShare} />
        )}
      </Layout>
    </>
  );
}
