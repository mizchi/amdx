import Head from "next/head";
import pages from "../gen/pages.json";
import ssgConfig from "../mdxx-ssg.json";
import format from "date-fns/format";
import { Layout } from "../components/Layout";

export const config = { amp: true };

export default () => {
  return (
    <>
      <Head>
        <title>{ssgConfig.siteName}</title>
      </Head>
      <Layout>
        <h1>{ssgConfig.siteName}</h1>
        {pages.map((page, index) => {
          // @ts-ignore
          const formatted = format(page.created as number, "yyyy/MM/dd/HH:mm");
          return (
            <div key={index}>
              <span>{formatted}</span>:
              <a href={"/" + page.slug}>{page.title}</a>
            </div>
          );
        })}
      </Layout>
    </>
  );
};
