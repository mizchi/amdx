import { Layout } from "../components/_Layout";
import { AmpScript } from "../components/AmpScript";

export const config = {
  amp: true,
};

export default () => {
  const host =
    process.env.NODE_ENV === "production"
      ? "https://mdxx-ssg-demo.netlify.app/"
      : "http://localhost:3000/";
  return (
    <Layout>
      {/* <AmpScript /> */}
      <AmpScript layout="container" src={`${host}static/amp-script/hello.js`}>
        <button>Hello amp-script!</button>
      </AmpScript>
    </Layout>
  );
};
