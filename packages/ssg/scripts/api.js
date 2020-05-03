const fs = require("fs");
const path = require("path");

function loadConfig() {
  const data = fs.readFileSync(
    path.join(__dirname, "../mdxx-ssg.json"),
    "utf-8"
  );
  return JSON.parse(data);
}

function getPaths() {
  const stats = fs.readdirSync(path.join(__dirname, "../pages"), "utf-8");
  const paths = stats
    .map((s) => s.replace(".tsx", ""))
    .filter((s) => !s.startsWith("_"))
    .filter((s) => s !== "index");
  return paths;
}

function createIndex(paths, config) {
  // TODO: parse frontmatter title
  const siteName = config.siteName || "mdxx-ssg";
  const indexFile = `// created by create-index
import Head from "next/head";
export const config = { amp: true };
export default () => {
  return (
    <>
      <Head>
        <title>${siteName}</title>
      </Head>
      <div>
        <h1>${siteName}</h1>
        {${JSON.stringify(paths)}.map((fpath, index) => {
          return (
            <div key={index}>
              <a href={"/" + fpath}>{fpath}</a>
            </div>
          );
        })}
      </div>
    </>
  );
}
`;
  const indexPath = path.join(__dirname, "../pages/index.tsx");
  fs.writeFileSync(indexPath, indexFile);
  console.log("update >", indexPath.replace(process.cwd(), ""));
}

module.exports = {
  getPaths,
  createIndex,
  loadConfig,
};
