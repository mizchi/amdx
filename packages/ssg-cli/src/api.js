// const fs = require("fs");
// const parser = require("mdxx-parser");
// const path = require("path");

// function parseFrontmatter(mdx) {
//   const { frontmatter } = parser.parse(mdx);
//   return frontmatter;
// }

// function getPages() {
//   const stats = fs.readdirSync(path.join(__dirname, "../docs"), "utf-8");
//   const paths = stats
//     .filter((f) => f.endsWith(".mdx"))
//     .map((s) => {
//       const fullpath = path.join(path.join(__dirname, "../docs"), s);
//       const mdx = fs.readFileSync(fullpath, "utf-8");
//       const frontmatter = parseFrontmatter(mdx);
//       return { ...frontmatter, slug: s.replace(".mdx", "") };
//     });
//   return paths;
// }

// function createIndex(paths) {
//   // TODO: parse frontmatter title
//   const pages = JSON.stringify(paths, null, 2);
//   const pagesPath = path.join(__dirname, "../gen/pages.json");
//   fs.writeFileSync(pagesPath, pages);
//   console.log("[ssg:create-index]", pagesPath.replace(process.cwd(), ""));
// }

// module.exports = {
//   getPages,
//   createIndex,
// };
