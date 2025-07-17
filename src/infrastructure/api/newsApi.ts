import type { Article } from '../../domain/entities/Article';

export const fetchArticles = async (): Promise<Article[]> => {
  const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=bf3ff8f071e8472fab79e43af6de70da');
  const data = await res.json();
  return data.articles;
};