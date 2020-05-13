import { Article, Layout } from "amdxg-components";
import { GetStaticProps } from "next";
import ReactDOMServer from "react-dom/server";
import pages from "../gen/pages.json";
import ssgConfig from "../amdxg.config";
import Head from "next/head";

type Props = {
  slug: string;
  toc: Array<any>;
  history: Array<any>;
  frontmatter: {
    title: string;
    created: number;
    tags?: string[];
  };
  tags: string[];
  html: string;
};

export const config = { amp: true };

export function getStaticPaths() {
  const paths = pages.map((page) => {
    return `/${page.slug}`;
  });
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (props) => {
  const slug = props.params.slug;
  const { frontmatter, default: Doc, toc } = await import(
    `../docs/${slug}.mdx`
  );
  const { default: history } = await import(`../gen/${slug}.history.json`);
  return {
    props: {
      slug,
      toc,
      history,
      tags: frontmatter.tags || [],
      frontmatter: frontmatter || { title: slug, created: 0, tags: [] },
      html: ReactDOMServer.renderToStaticMarkup(<Doc amp />),
    } as Props,
  };
};

export default (props: Props) => (
  <>
    <Head>
      <title>
        {props.frontmatter.title} - {ssgConfig.siteName}
      </title>
    </Head>
    <Layout config={ssgConfig}>
      <Article
        ssgConfig={ssgConfig}
        history={props.history}
        toc={props.toc}
        title={props.frontmatter.title}
        tags={props.tags}
      >
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
      </Article>
    </Layout>
  </>
);
