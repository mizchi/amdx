import Head from "next/head";
import { Layout, TagList } from "amdxg-components";
import ssgConfig from "../../amdxg.config";
import tagmap from "../../gen/tagmap.json";

export const config = { amp: true };

export default () => {
  return (
    <>
      <Head>
        <title>Tags - {ssgConfig.siteName}</title>
      </Head>
      <Layout config={ssgConfig}>
        <TagList tags={Object.keys(tagmap)} />
      </Layout>
    </>
  );
};
