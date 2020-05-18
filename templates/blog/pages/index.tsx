import Head from "next/head";
import { PageList, TagList, Layout } from "amdxg-components";
import pages from "../gen/pages.json";
import _config from "../amdxg.config";
import tagmap from "../gen/tagmap.json";

export const config = { amp: true };

export default () => {
  return (
    <>
      <Head>
        <title>{_config.siteName}</title>
      </Head>
      <Layout config={_config}>
        <h2>Pages</h2>
        <PageList pages={pages as any} />
        <h2>Tags</h2>
        <TagList tags={Object.keys(tagmap)} />
      </Layout>
    </>
  );
};
