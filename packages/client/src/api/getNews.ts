import mapNews from 'mappers/news';
import { News } from 'Models/News';
import makeApiCall from './api';

const getNews = async () => {
  const endPoint = `${process.env.REACT_APP_MESSARI_API_URL}/v1/news`;
  const { data } = await makeApiCall(endPoint);
  return data.map((news: News) => mapNews(news));
};

export default getNews;
