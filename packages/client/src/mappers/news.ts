import { News, NewsMapped } from 'models/News';

const mapNews = (source: News): NewsMapped => {
  return {
    category: source.category,
    datePublished: source.datePublished,
    description: source.description,
    thumbnailUrl: source.image?.thumbnail?.contentUrl,
    thumbnailWidth: source.image?.thumbnail?.width,
    thumbnailHeight: source.image?.thumbnail?.height,
    name: source.name,
    provider: source.provider,
    url: source.url,
  };
};

export default mapNews;
