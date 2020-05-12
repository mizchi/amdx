import Head from "next/head";
import { Layout, PageList, TagList } from "amdxg-components";
import pages from "../gen/pages.json";
import ssgConfig from "../amdxg.config";
import tagmap from "../gen/tagmap.json";

export const config = { amp: true };

export default () => {
  return (
    <>
      <Head>
        <title>{ssgConfig.siteName}</title>
      </Head>
      <Layout ssgConfig={ssgConfig}>
        <h2>Pages</h2>
        <PageList pages={pages as any} />
        <h2>Tags</h2>
        <TagList tags={Object.keys(tagmap)} />
      </Layout>
    </>
  );
};
