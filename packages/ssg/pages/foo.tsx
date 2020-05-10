// @ts-ignore
import Doc, { frontmatter, toc } from "../docs/foo.mdx";
import history from "../gen/foo.history.json";
import ssgConfig from "../mdxx-ssg.json";
import { Article, Layout } from "mdxx-ssg-components";

export const config = { amp: true };

export default () => (
  <Layout ssgConfig={ssgConfig}>
    <Article
      ssgConfig={ssgConfig}
      history={history}
      toc={toc}
      title={frontmatter.title}
    >
      <Doc amp />
    </Article>
  </Layout>
);
