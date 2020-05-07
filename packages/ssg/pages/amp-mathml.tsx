import Head from "next/head";
import { Layout } from "../components/Layout";
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
    <amp-mathml
      layout="container"
      // data-formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
      data-formula="\[y = x^2\]"
    />
  );
}
