import { News, NewsMapped } from 'Models/News';

const mapNews = (source: News): NewsMapped => {
  return {
    id: source.id,
    title: source.title,
    content: source.content,
    references: source.references,
    referenceTitle: source.reference_title,
    publishedAt: source.published_at,
    author: source.author,
    tags: source.tags,
    url: source.url,
  };
};

export default mapNews;
