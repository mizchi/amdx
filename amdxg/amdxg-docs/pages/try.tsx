import { AmpScript, Layout } from "amdxg-components";
import ssgConfig from "../amdxg.config";

export const config = {
  amp: true,
};

export default () => {
  const host =
    process.env.NODE_ENV === "production"
      ? "https://amdxg-demo.netlify.app/"
      : "http://localhost:3000/";
  return (
    <Layout ssgConfig={ssgConfig}>
      <AmpScript layout="container" src={`${host}static/amp-script/hello.js`}>
        <button>Hello amp-script!</button>
      </AmpScript>
    </Layout>
  );
};
