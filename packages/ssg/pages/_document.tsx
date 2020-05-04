import Document, { Html, Head, Main, NextScript } from "next/document";
// @ts-ignore
import css from "!!raw-loader!../styles/github-markdown.css";
// @ts-ignore
import prismCss from "!!raw-loader!../styles/prism.css";
// @ts-ignore
import custom from "!!raw-loader!../styles/styles.css";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            dangerouslySetInnerHTML={{
              __html: `${css}\n${prismCss}\n${custom}`,
            }}
          />
        </>
      ),
    };
  }
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
