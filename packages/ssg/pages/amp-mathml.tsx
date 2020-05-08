import Head from "next/head";
import { Layout, AmpIncludeAmpMathml } from "mdxx-ssg-components";
import ssgConfig from "../mdxx-ssg.json";

export const config = { amp: true };

export default () => {
  return (
    <>
      <Head>
        <AmpIncludeAmpMathml />
      </Head>
      <Layout ssgConfig={ssgConfig}>
        <MathmlExample />
      </Layout>
    </>
  );
};

function MathmlExample() {
  return (
    // @ts-ignore
    <amp-mathml layout="container" data-formula="\[y = x^2\]" />
  );
}
