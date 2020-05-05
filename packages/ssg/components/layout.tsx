import { AmpIncludeAmpInstallServiceworker } from "./amp";
import styled from "styled-components";

export function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <AmpIncludeAmpInstallServiceworker />
      <AmpInstallSW />

      <div
        style={{
          width: "100%",
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 15,
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            maxWidth: "960px",
          }}
        >
          <main style={{ minHeight: "50vh" }}>{props.children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}

const _Header = styled.header`
  height: 48px;
  width: 100%;
  background: #333;
`;

function Header() {
  return (
    <_Header>
      <div
        style={{
          width: 180,
          paddingLeft: 10,
          paddingTop: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          href="/"
          style={{ textDecoration: "none", color: "white", fontSize: "1.2em" }}
        >
          ⚡ mizchi.dev
        </a>
      </div>
      {/* </header> */}
    </_Header>
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
