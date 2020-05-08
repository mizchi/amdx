import React from "react";
import { AmpIncludeAmpAnalytics } from "./amp";

export function GoogleAnalytics(props: { gtag: string }) {
  return (
    <>
      <AmpIncludeAmpAnalytics />
      <GoogleAnalyticsTag {...props} />
    </>
  );
}

function GoogleAnalyticsTag(props: { gtag: string }) {
  const json = JSON.stringify({
    vars: {
      gtag_id: props.gtag,
      config: {
        [props.gtag]: { groups: "default" },
      },
    },
  });
  return (
    // @ts-ignore
    // prettier-ignore
    <amp-analytics type="gtag" data-credentials="include"><script type="application/json" dangerouslySetInnerHTML={{ __html: json }} /></amp-analytics>
  );
}
