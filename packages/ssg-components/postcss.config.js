module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("@fullhuman/postcss-purgecss")({
      whitelist: [
        "body",
        "html",
        // for prism
        "pre",
        "code",
        // for amp custom
        "amp-social-share",
        ".amp-img-container",
        // for markdown css
        ".markdown-body",
      ],
      whitelistPatterns: [/token/, /amp/],
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    require("postcss-preset-env"),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
