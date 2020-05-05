import Document, { Html, Head, Main, NextScript } from "next/document";
// @ts-ignore
import css from "!!raw-loader!../styles/github-markdown.css";
// @ts-ignore
import prismCss from "!!raw-loader!../styles/prism.css";
// @ts-ignore
import custom from "!!raw-loader!../styles/styles.css";
import { ServerStyleSheet } from "styled-components";
import ssgConfig from "../mdxx-ssg.json";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    try {
      const page = ctx.renderPage((App) => (props) =>
        sheet.collectStyles(<App {...props} />)
      );
      const initialProps: any = await Document.getInitialProps(ctx);
      return {
        ...page,
        styles: [
          ...initialProps.styles,
          <style
            dangerouslySetInnerHTML={{
              __html: `${css}\n${prismCss}\n${custom}`,
            }}
          />,
          ...sheet.getStyleElement(),
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang={ssgConfig.lang || "en-US"}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
