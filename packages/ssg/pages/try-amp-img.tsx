import { Layout } from "../components/_Layout";

export const config = { amp: true };

export default () => (
  <Layout>
    <h1>Test AmpImg</h1>
    <div className="markdown-body">
      <div className="amp-img-container" style={{ height: 500 }}>
        <AmpImg />
      </div>
    </div>
  </Layout>
);

function AmpImg() {
  return (
    // @ts-ignore
    <amp-img
      layout="fill"
      src="https://gyazo.com/fb242c7e11b527d78e3d1de0d0dfef1e.png"
    />
  );
}
