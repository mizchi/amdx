// created by create-index
import Head from "next/head";
export const config = { amp: true };
export default () => {
  return (
    <>
      <Head>
        <title>mizchi blog</title>
      </Head>
      <div>
        <h1>mizchi blog</h1>
        {["20200503-yyy","bar","baz","foo","tamasii","xxx"].map((fpath, index) => {
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
