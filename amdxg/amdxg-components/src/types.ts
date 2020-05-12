export type AmdxgConfig = {
  siteName: string;
  authorLink: string;
  author: string;
  gtag?: string;
  repository?: string;
  socialShare?: {
    twitter?: boolean;
    facebook?: boolean;
    line?: boolean;
    hatena?: boolean;
  };
};

export type Page = {
  slug: string;
  title: string;
  created: number;
};

export type HistoryData = Array<{
  hash: string;
  author: string;
  message: string;
  date: string;
}>;

export type ToCData = Array<{ id: string; depth: number; title: string }>;
