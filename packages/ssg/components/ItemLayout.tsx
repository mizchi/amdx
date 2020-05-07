import { Layout } from "./_Layout";
import Head from "next/head";
import ssgConfig from "../mdxx-ssg.json";
import { AmpIncludeAmpAnalytics, AmpIncludeAmpSocialShare } from "./amp";
export function ItemLayout(props: {
  title: string;
  authorLink: string;
  author: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>
          {props.title} - {ssgConfig.siteName}
        </title>
        <AmpIncludeAmpSocialShare />
        <AmpIncludeAmpAnalytics />
      </Head>
      <Analytics />
      <Layout>
        <div className="markdown-body">
          <h1>{props.title}</h1>
          <p>
            by <a href={props.authorLink}>{props.author}</a>
          </p>
          {props.children}
        </div>

        <div style={{ paddingTop: 15 }}>
          <TwitterShare />
          <FacebookShare />
          {/* <LineShare /> */}
        </div>
      </Layout>
    </>
  );
}

function TwitterShare() {
  // @ts-ignore
  return <amp-social-share type="twitter"></amp-social-share>;
}

function FacebookShare() {
  // @ts-ignore
  return <amp-social-share type="facebook"></amp-social-share>;
}

function LineShare() {
  // @ts-ignore
  return <amp-social-share type="line"></amp-social-share>;
}

function Analytics() {
  const json = JSON.stringify({
    vars: {
      gtag_id: "[GAUA]",
      config: {
        "[GAUA]": { groups: "default" },
      },
    },
  });
  return (
    // @ts-ignore
    // prettier-ignore
    <amp-analytics type="gtag" data-credentials="include"><script type="application/json" dangerouslySetInnerHTML={{ __html: json }} /></amp-analytics>
  );
}
