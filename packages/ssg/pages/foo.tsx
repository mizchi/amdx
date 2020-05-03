// @ts-ignore
import Bar from "../components/bar.mdx";

export const config = {
  amp: true,
};

export default () => {
  return (
    <div className="markdown-body">
      <p>p tag</p>
      <hr />
      <Bar />
    </div>
  );
};
