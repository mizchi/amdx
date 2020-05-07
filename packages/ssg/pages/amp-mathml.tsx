import Head from "next/head";
import { Layout } from "../components/_Layout";
import { AmpIncludeAmpMathml } from "../components/amp";

export const config = { amp: true };

export default () => {
  return (
    <>
      <Head>
        <AmpIncludeAmpMathml />
      </Head>
      <Layout>
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
