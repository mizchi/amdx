import Head from "next/head";
import { Layout, TagList } from "mdxx-ssg-components";
import ssgConfig from "../../mdxx-ssg.json";
import tagmap from "../../gen/tagmap.json";

export const config = { amp: true };

export default () => {
  return (
    <>
      <Head>
        <title>Tags - {ssgConfig.siteName}</title>
      </Head>
      <Layout ssgConfig={ssgConfig}>
        <TagList tags={Object.keys(tagmap)} />
      </Layout>
    </>
  );
};
