export interface Article {
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  url: string;
  author?: string;
  source?: {
    id: string;
    name: string;
  };
}