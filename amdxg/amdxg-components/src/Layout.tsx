import React from "react";
import styled from "styled-components";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { SsgConfig } from "./types";

export function Layout(props: {
  ssgConfig: SsgConfig;
  children: React.ReactNode;
}) {
  return (
    <>
      <AmpInstallSW />
      {props.ssgConfig.gtag && <GoogleAnalytics gtag={props.ssgConfig.gtag} />}
      <Header ssgConfig={props.ssgConfig} />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
}

function Main(props: { children: React.ReactNode }) {
  return (
    <MainContainer>
      <MainContent>
        <main>{props.children}</main>
      </MainContent>
    </MainContainer>
  );
}

export function Header(props: { ssgConfig: SsgConfig }) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a
          href="/"
          className="font-semibold text-xl tracking-tight text-gray-200"
        >
          ⚡{props.ssgConfig.siteName}
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

function AmpInstallSW() {
  return (
    // @ts-ignore
    <amp-install-serviceworker
      src="/sw.js"
      data-iframe-src="/install-sw.html"
      layout="nodisplay"
    />
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
