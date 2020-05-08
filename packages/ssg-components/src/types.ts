export type SsgConfig = {
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

export type History = Array<{
  hash: string;
  author: string;
  message: string;
  date: string;
}>;

export type ToC = Array<{ id: string; depth: number; title: string }>;
