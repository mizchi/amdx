import { AmpScript, Layout } from "mdxx-ssg-components";
import ssgConfig from "../mdxx-ssg.json";

export const config = {
  amp: true,
};

export default () => {
  const host =
    process.env.NODE_ENV === "production"
      ? "https://mdxx-ssg-demo.netlify.app/"
      : "http://localhost:3000/";
  return (
    <Layout ssgConfig={ssgConfig}>
      {/* <AmpScript /> */}
      <AmpScript layout="container" src={`${host}static/amp-script/hello.js`}>
        <button>Hello amp-script!</button>
      </AmpScript>
    </Layout>
  );
};
