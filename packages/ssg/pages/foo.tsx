// @ts-ignore
import Bar from "../docs/bar.mdx";

export const config = {
  amp: true,
};

export default () => {
  return (
    <div className="markdown-body">
      <Bar />
    </div>
  );
};
