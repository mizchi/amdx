import Head from "next/head";
import { Layout } from "mdxx-ssg-components";
import { GetStaticProps } from "next";
import ssgConfig from "../../mdxx-ssg.json";
import tagmap from "../../gen/tagmap.json";

export const config = { amp: true };

export function getStaticPaths() {
  const paths = Object.keys(tagmap).map((tag) => {
    return `/tags/${tag}`;
  });
  return {
    paths,
    fallback: false,
  };
}

type Props = {
  tagName: string;
  pages: Array<{ title: string; slug: string }>;
};

export const getStaticProps: GetStaticProps = async (props) => {
  const tag = props.params.tag;
  return {
    props: {
      tagName: tag,
      pages: tagmap[tag as any],
    } as Props,
  };
};

export default (props: Props) => {
  // console.log(props);
  return (
    <>
      <Head>
        <title>
          {props.tagName} - {ssgConfig.siteName}
        </title>
      </Head>
      <Layout ssgConfig={ssgConfig}>
        <h1>tag: {props.tagName}</h1>
        <div style={{ paddingTop: 10 }}>
          {props.pages.map((page) => {
            return (
              <div key={page.slug}>
                <a href={`/${page.slug}`}>{page.title}</a>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};
