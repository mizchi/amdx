const path = require("path");
module.exports = {
  resolve: {
    extensions: [".tsx", ".js", ".jsx", ".ts", ".json"],
  },
  entry: {
    amdx: path.join(__dirname, "src/index.ts"),
  },
  output: {
    globalObject: "globalThis",
    libraryTarget: "umd",
    filename: "[name].js",
  },
  node: {
    fs: "empty",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
};
