import Head from "next/head";
import { Layout } from "mdxx-ssg-components";
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
        {Object.entries(tagmap).map(([tag, pages]) => {
          return <div key={tag}>{tag}</div>;
        })}
      </Layout>
    </>
  );
};
