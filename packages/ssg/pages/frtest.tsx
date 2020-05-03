// @ts-ignore
import Tama, { frontmatter } from "../components/tama.mdx";
import Head from "next/head";

export const config = {
  amp: true,
};

export default () => {
  return (
    <>
      <Head>
        <title>{frontmatter?.title ?? "mdxx-ssg"} </title>
      </Head>
      <main className="markdown-body">
        <h1>{frontmatter?.title}</h1>
        <p>by {frontmatter?.author}</p>
        <Tama />
      </main>
    </>
  );
};
