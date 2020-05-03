// @ts-ignore
import Tama, { frontmatter } from "../docs/tama.mdx";
import { Layout } from "../components/layout";

export const config = {
  amp: true,
};

export default () => {
  return (
    <Layout
      title={frontmatter?.title ?? "mdxx-ssg"}
      author={frontmatter?.author ?? "anonymous"}
    >
      <Tama />
    </Layout>
  );
};
