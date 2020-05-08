import React from "react";
import { AmpIncludeAmpSocialShare } from "./amp";

export function SocialShare(props: {
  twitter?: boolean;
  facebook?: boolean;
  line?: boolean;
  hatena?: boolean;
}) {
  return (
    <>
      <AmpIncludeAmpSocialShare />
      <div style={{ paddingTop: 15 }}>
        {props.twitter && <TwitterShare />}
        {props.hatena && <HatenaBookmarkShare />}
        {props.facebook && <FacebookShare />}
        {props.line && <LineShare />}
      </div>
    </>
  );
}

function TwitterShare() {
  // @ts-ignore
  return <amp-social-share type="twitter"></amp-social-share>;
}

function FacebookShare() {
  // @ts-ignore
  return <amp-social-share type="facebook"></amp-social-share>;
}

function LineShare() {
  // @ts-ignore
  return <amp-social-share type="line"></amp-social-share>;
}

function HatenaBookmarkShare() {
  return (
    // @ts-ignore
    // prettier-ignore
    // <amp-social-share type="hatena_bookmark" layout="container" data-share-endpoint="http://b.hatena.ne.jp/entry/CANONICAL_URL">B!</amp-social-share>
    <amp-social-share type="hatena_bookmark" data-share-endpoint="http://b.hatena.ne.jp/entry/CANONICAL_URL" />
  );
}
