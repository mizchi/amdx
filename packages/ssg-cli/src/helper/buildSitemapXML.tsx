import * as xmljs from "xml-js";

export function buildSitemapXML(
  origin: string,
  pages: Array<{ slug: string; created: number }>
): string {
  const recent = Math.max(...pages.map((p) => p.created));
  return xmljs.js2xml(
    {
      _declaration: {
        _attributes: {
          version: "1.0",
          encoding: "utf-8",
        },
      },
      urlset: {
        _attributes: {
          xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
        },
        url: [
          {
            loc: {
              _text: `${origin}`,
            },
            lastmod: {
              _text: new Date(recent).toISOString(),
            },
            changefreq: {
              _text: "daily",
            },
            priority: {
              _text: 1.0,
            },
          },
        ].concat(
          pages.map((page) => {
            return {
              loc: {
                _text: `${origin}/${page.slug}`,
              },
              lastmod: {
                _text: new Date(page.created).toISOString(),
              },
              changefreq: {
                _text: "daily",
              },
              priority: {
                _text: 1.0,
              },
            };
          })
        ),
      },
    },
    { compact: true }
  );
}

// function escape(string: string): string {
//   return string
//     .replace("&", "&amp")
//     .replace("'", "&apos")
//     .replace('"', "&quot")
//     .replace(">", "&gt")
//     .replace("<", "&lt");
// }
