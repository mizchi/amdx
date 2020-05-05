import { AmpIncludeAmpInstallServiceworker } from "./amp";
import styled from "styled-components";

export function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <AmpIncludeAmpInstallServiceworker />
      <AmpInstallSW />
      <Header />
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

function Header() {
  return (
    <HeaderContainer>
      <HeaderInner>
        <a
          href="/"
          style={{ textDecoration: "none", color: "white", fontSize: "1.2em" }}
        >
          ⚡ mizchi.dev
        </a>
      </HeaderInner>
    </HeaderContainer>
  );
}

function Footer() {
  return (
    <>
      <hr />

      <footer style={{ paddingBottom: 20, paddingLeft: 10 }}>
        <p>
          created by <a href="https://github.com/mizchi/mdxx">mdxx-ssg</a>
        </p>
        <p>This site uses Google Analytics.</p>
      </footer>
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

const HeaderContainer = styled.header`
  height: 48px;
  width: 100%;
  background: #333;
`;

const HeaderInner = styled.div`
  width: 180px;
  padding-left: 1px;
  padding-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  min-height: 50vh;
`;
