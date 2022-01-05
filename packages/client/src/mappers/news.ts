import { News, NewsMapped } from 'Models/News';

const mapNews = (source: News): NewsMapped => {
  return {
    category: source.category,
    datePublished: source.datePublished,
    description: source.description,
    thumbnailUrl: source.image.thumbnail.contentUrl ?? '',
    thumbnailWidth: source.image.thumbnail.width ?? 0,
    thumbnailHeight: source.image.thumbnail.height ?? 0,
    name: source.name,
    provider: source.provider,
    url: source.url,
  };
};

export default mapNews;
