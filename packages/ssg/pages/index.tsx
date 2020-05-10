import Head from "next/head";
import pages from "../gen/pages.json";
import ssgConfig from "../mdxx-ssg.json";
import { Layout, PageList } from "mdxx-ssg-components";

export const config = { amp: true };

export default () => {
  return (
    <>
      <Head>
        <title>{ssgConfig.siteName}</title>
      </Head>
      <Layout ssgConfig={ssgConfig}>
        <PageList pages={pages as any} />
      </Layout>
    </>
  );
};
