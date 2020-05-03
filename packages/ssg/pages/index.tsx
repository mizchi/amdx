import Head from "next/head";
export const config = { amp: true };
import pages from "../gen/pages.json";
import ssgConfig from "../mdxx-ssg.json";
import format from "date-fns/format";

export default () => {
  return (
    <>
      <Head>
        <title>{ssgConfig.siteName}</title>
      </Head>
      <div>
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
      </div>
    </>
  );
};
