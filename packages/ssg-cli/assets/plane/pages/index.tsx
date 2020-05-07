import Head from "next/head";
// @ts-ignore
import pages from "../gen/pages.json";
// import ssgConfig from "../mdxx-ssg.json";
import format from "date-fns/format";
// import { Layout } from "../components/Layout";

export const config = { amp: true };

export default () => {
  return (
    <div>
      {/* <Head>
        <title>{ssgConfig.siteName}</title>
      </Head> */}
      {/* <Layout> */}
      {(pages as any).map((page, index) => {
        // @ts-ignore
        const formatted =
          page.created && format(page.created as number, "yyyy/MM/dd/HH:mm");
        return (
          <div key={index}>
            {page.created && <span>{formatted}</span>}: &nbsp;
            <a href={"/" + page.slug}>{page.title}</a>
          </div>
        );
      })}
      {/* </Layout> */}
    </div>
  );
};
