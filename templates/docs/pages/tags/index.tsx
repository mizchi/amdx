import Head from "next/head";
import { Layout, TagList } from "amdxg-components";
import _config from "../../amdxg.config";
import tagmap from "../../gen/tagmap.json";

export const config = { amp: true };

export default () => {
  return (
    <>
      <Head>
        <title>Tags - {_config.siteName}</title>
      </Head>
      <Layout config={_config}>
        <TagList tags={Object.keys(tagmap)} />
      </Layout>
    </>
  );
};
