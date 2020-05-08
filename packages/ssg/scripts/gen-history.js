const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");
const { getPages } = require("./api");

const cmd = `git --no-pager log --no-color --pretty=format:'{"date":"%ad","hash":"%h","author":"%an","message": "%s"}'`;

function genHistory(slug) {
  // const target = process.argv[2];
  const output = execSync(`${cmd} docs/${slug}.mdx`, {
    cwd: process.cwd(),
  }).toString();

  const json = "[" + output.split("\n").join(",") + "]";
  const history = JSON.parse(json);
  fs.writeFileSync(
    path.join(process.cwd(), `gen/${slug}.history.json`),
    JSON.stringify(history, null, 2)
  );
}

getPages().forEach((page) => {
  genHistory(page.slug);
});
