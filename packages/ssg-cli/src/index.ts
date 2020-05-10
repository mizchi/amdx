import path from "path";
import meow from "meow";
import fs from "fs-extra";
import { parse } from "mdxx-parser";
import { execSync } from "child_process";
// @ts-ignore
import sortBy from "lodash.sortby";
import { buildSitemapXML } from "./helper/buildSitemapXML";

const cmd = `git --no-pager log --no-color --pretty=format:'{"date":"%ad","hash":"%h","author":"%an","message": "%s"}'`;

type Page = {
  slug: string;
  title: string;
  created: number;
  tags?: Array<string>;
};

function parseFrontmatter(mdx: string) {
  const { frontmatter } = parse(mdx);
  return frontmatter;
}

const cli = meow(`mdxx-ssg-cli`, {
  flags: {},
});

main(cli.input[0], cli.flags);

// cmds
async function init(flags: any) {
  console.log("wip", flags);
}

function _loadConfig() {
  return require(path.join(process.cwd(), "mdxx-ssg.json"));
}

function buildSitemap(flags: {}) {
  const ssgConfig = _loadConfig();
  const pages = genPages(process.cwd());
  const sitemap = buildSitemapXML(ssgConfig.host, pages);
  fs.writeFileSync(path.join(process.cwd(), "out/sitemap.xml"), sitemap);
  console.log("[ssg:postbuild:sitemap] out/sitemap.xml");
}

function _buildTagMap(frontmatters: Array<Page>): { [key: string]: string[] } {
  const tagMap = {};

  for (const frontmatter of frontmatters) {
    let { tags, title, slug } = frontmatter;
    if (tags == null) {
      continue;
    }

    if (typeof tags === "string") {
      tags = [tags];
    }

    for (const tagName of tags) {
      const mapped = tagMap[tagName];

      const item = {
        title,
        slug,
      };

      if (mapped) {
        mapped.push(item);
      } else {
        tagMap[tagName] = [item];
      }
    }
  }
  return tagMap;
}

function buildTags(flags: {}) {
  const pages = genPages(process.cwd());
  const tagMap = _buildTagMap(pages);
  fs.writeFileSync(
    path.join(process.cwd(), "gen/tagmap.json"),
    JSON.stringify(tagMap)
  );
  console.log("[ssg:tags]", "gen/tagmap.json");
}

function buildRSS(flags: {}) {
  const ssgConfig = _loadConfig();
  const pages = genPages(process.cwd());

  const recent = Math.max(...pages.map((p) => p.created));
  const feed = `<?xml version="1.0" ?>
  <rss version="2.0">
    <channel>
      <title>${escape(ssgConfig.siteName)}</title>
      <link>${ssgConfig.host}</link>
      <description></description>
      <language>${ssgConfig.lang}</language>
      <lastBuildDate>${new Date(recent).toISOString()}</lastBuildDate>
      ${pages
        .map((p: any) => {
          return `
        <item>
          <title>${escape(p.title)}</title>
          <link>
            ${path.join(ssgConfig.host, p.slug)}
          </link>
          <pubDate>${new Date(p.created).toISOString()}</pubDate>
          <description>
          <![CDATA[]]>
          </description>
        </item>
        `;
        })
        .join("")}
    </channel>
  </rss>`;
  fs.writeFileSync(path.join(process.cwd(), "out/rss.xml"), feed);
  console.log("[ssg:postbuild:rss] out/rss.xml");
}

function genPages(cwd: string): Array<Page> {
  const pageDir = path.join(cwd, "docs");
  const stats = fs.readdirSync(pageDir, "utf-8");

  const pages = stats
    .filter((f) => f.endsWith(".mdx"))
    .map((s) => {
      const fullpath = path.join(pageDir, s);
      const mdx = fs.readFileSync(fullpath, "utf-8");
      const frontmatter = parseFrontmatter(mdx);
      return { ...frontmatter, slug: s.replace(".mdx", "") };
    });

  return sortBy(pages, (p: any) => -p.created);
}

function buildIndex(flags: {}) {
  // TODO: parse frontmatter title
  const pages = genPages(process.cwd());
  const json = JSON.stringify(pages, null, 2);
  const pagesPath = path.join(process.cwd(), "gen/pages.json");
  fs.writeFileSync(pagesPath, json);
  console.log("[ssg:build:index]", "gen/pages.json");
}

function _genHistory(slug: string) {
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

function buildHistory(flags: {}) {
  genPages(process.cwd()).forEach((page) => {
    _genHistory(page.slug);
    console.log("[ssg:build:history]", `gen/${page.slug}.history.json`);
  });
}

function newPage(flags: {}) {
  const [, , , inputName] = process.argv;
  const format = require("date-fns/format");
  const now = Date.now();
  const current = format(now, "yyyyMMddHHmm");
  let slug = inputName ? inputName : current;

  const mdxPath = path.join(process.cwd(), "docs", slug + ".mdx");

  const title = inputName ? inputName : slug;
  fs.writeFileSync(
    mdxPath,
    `---
title: ${title}
created: ${now}
---
`
  );
  // blank history
  fs.writeFileSync(
    path.join(process.cwd(), "gen", `${slug}.history.json`),
    "[]"
  );
  console.log("[ssg:gen]", mdxPath.replace(process.cwd(), ""));
}

function main(cmd: string, flags: any) {
  switch (cmd) {
    case "init": {
      init(flags);
      return;
    }
    case "watch": {
      console.log("wip");
      return;
    }
    case "build:tags": {
      buildTags(flags);
      return;
    }
    case "build:index": {
      buildIndex(flags);
      return;
    }
    case "build:history": {
      buildHistory(flags);
      return;
    }
    case "build:index": {
      buildIndex(flags);
      return;
    }
    case "build": {
      buildIndex(flags);
      buildHistory(flags);
      buildTags(flags);
      return;
    }
    case "postbuild": {
      buildSitemap(flags);
      buildRSS(flags);
      return;
    }
    case "postbuild:sitemap": {
      buildSitemap(flags);
      return;
    }
    case "postbuild:rss": {
      buildRSS(flags);
      // buildSitemap(flags);
      return;
    }
    case "new:page": {
      newPage(flags);
      buildIndex(flags);
      return;
    }
    case "start": {
      console.log("wip");
      return;
    }
    case "deploy": {
      console.log("wip");
      return;
    }
  }
}

function escape(string: string): string {
  return string
    .replace("&", "&amp;")
    .replace("'", "&apos;")
    .replace('"', "&quot;")
    .replace(">", "&gt;")
    .replace("<", "&lt;");
}
