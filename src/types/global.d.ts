declare module '*.png' {
  const value: any;
  export = value;
}

export type TLocation = {
  pathname: string;
}

export type TNode = {
  excerpt: string;
  id: string;
  frontmatter: {
    date: string;
    title: string;
    description?: string;
    path: string;
  };
  html: string;
}

export type TEdge = {
  node: TNode;
}

export type TMarkdown = {
  edges: TEdge[];
}

export type TPageContext = {
  previous: TNode;
  next: TNode;
}

export type TSite = {
  siteMetadata: {
    author: string;
    description: string;
    siteUrl: string;
    social: {};
    title: string;
  };
  pathPrefix: string;
}