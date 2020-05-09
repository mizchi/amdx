import React from "react";
import { AmpIncludeAmpInstallServiceworker } from "./amp";
import styled from "styled-components";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { SsgConfig } from "./types";

export function Layout(props: {
  ssgConfig: SsgConfig;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header siteName={props.ssgConfig.siteName} />
      <Main>
        <AmpIncludeAmpInstallServiceworker />
        <AmpInstallSW />
        {props.ssgConfig.gtag && (
          <GoogleAnalytics gtag={props.ssgConfig.gtag} />
        )}
        {props.children}
      </Main>
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

function Header(props: { siteName: string }) {
  return (
    <HeaderContainer>
      <HeaderInner>
        <a
          href="/"
          style={{ textDecoration: "none", color: "white", fontSize: "1.2em" }}
        >
          ⚡ {props.siteName}
        </a>
      </HeaderInner>
    </HeaderContainer>
  );
}

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <p>
            created by&nbsp;
            <a href="https://github.com/mizchi/mdxx" style={{ color: "white" }}>
              mdxx-ssg
            </a>
          </p>
          <p>This site uses Google Analytics.</p>
        </FooterContent>
      </FooterContainer>
    </>
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

const FooterContainer = styled.footer`
  padding-left: 10px;
  padding-top: 10px;
  background: #333;
  color: white;
  display: flex;
  justify-content: center;
`;

const FooterContent = styled.div`
  min-width: 480px;
  max-width: 960px;
`;

const HeaderContainer = styled.header`
  height: 48px;
  width: 100%;
  background: #333;
  display: flex;
  align-items: center;
  /* justify-content: start; */
`;

const HeaderInner = styled.div`
  /* min-width: 400px; */
  width: 400px;
  padding-left: 80px;
  /* max-height: 960px; */
  /* padding-left: 1px; */
  /* padding-top: 8px; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

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
