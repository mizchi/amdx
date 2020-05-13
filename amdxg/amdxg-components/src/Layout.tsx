import React from "react";
import styled from "styled-components";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { AmdxgConfig } from "./types";

export function Layout(props: {
  config: AmdxgConfig;
  children: React.ReactNode;
}) {
  return (
    <>
      <DefaultPlugins config={props.config} />
      <Header config={props.config} />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
}

export function DefaultPlugins(props: { config: AmdxgConfig }) {
  return (
    <>
      <AmpInstallServiceWorker />
      {props.config.gtag && <GoogleAnalytics gtag={props.config.gtag} />}
    </>
  );
}

export function Main(props: { children: React.ReactNode }) {
  return (
    <MainContainer>
      <MainContent>
        <main>{props.children}</main>
      </MainContent>
    </MainContainer>
  );
}

export function Header(props: { config: AmdxgConfig }) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a
          href="/"
          className="font-semibold text-xl tracking-tight text-gray-200"
        >
          ⚡ {props.config.siteName}
        </a>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="flex items-center justify-between flex-wrap bg-gray-800 p-6 text-gray-200">
      <p>
        created by&nbsp;
        <a
          href="https://github.com/mizchi/amdx"
          className="text-blue-500 hover:text-blue-800"
        >
          amdxg
        </a>
        &nbsp;|&nbsp;<span>This site uses Google Analytics.</span>
      </p>
    </footer>
  );
}

export function AmpInstallServiceWorker(props: any) {
  const newProps = {
    src: "/sw.js",
    "data-iframe-src": "/install-sw.html",
    layout: "nodisplay",
    ...props,
  };
  return (
    // @ts-ignore
    <amp-install-serviceworker {...newProps} />
  );
}

const MainContainer = styled.div`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 15px;
  max-width: 100%;
`;

const MainContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  min-height: 80vh;
`;
