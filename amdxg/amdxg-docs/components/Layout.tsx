import React from "react";
import { DefaultPlugins, Header, Main, Footer, Link } from "amdxg-components";
import pages from "../gen/pages.json";
import Head from "next/head";
import { useAmp } from "next/amp";

export function Layout(props: { config: any; children: React.ReactNode }) {
  const isAmp = useAmp();

  return (
    <>
      {/* AMP img 表示用 */}
      {!isAmp && (
        <Head>
          <script async src="https://cdn.ampproject.org/v0.js" />
        </Head>
      )}
      <DefaultPlugins config={props.config} />
      <Header config={props.config} />
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "300px",
            paddingLeft: 10,
            // background: "wheat",
            boxShadow: "0 1px 0 0 rgba(0,0,0,0.4)",
            borderRight: "1px solid black",
          }}
        >
          {pages.map((page) => {
            return (
              <div key={page.slug} style={{ padding: 8 }}>
                <Link href={`/${page.slug}`}>{page.title}</Link>
              </div>
            );
          })}
        </div>
        <div style={{ flex: 1 }}>
          <Main>{props.children}</Main>
        </div>
      </div>
      <Footer />
    </>
  );
}
