export interface News {
  id: string;
  title: string;
  content: string;
  references: References;
  reference_title: string;
  published_at: string;
  author: Author;
  tags: string[];
  url: string;
}

interface References {
  name: string;
  url: string;
}
interface Author {
  name: string;
}

export interface NewsMapped {
  id: string;
  title: string;
  content: string;
  references: References;
  referenceTitle: string;
  publishedAt: string;
  author: Author;
  tags: string[];
  url: string;
}
