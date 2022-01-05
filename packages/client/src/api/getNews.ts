import mapNews from 'mappers/news';
import { News, NewsMapped } from 'Models/News';
import makeApiCall from './api';

const getNews = async (): Promise<NewsMapped[]> => {
  const endpoint = `${process.env.REACT_APP_RAPID_API_NEWS_API_URL}/search?q=cryptos&safeSearch=Off&textFormat=Raw&freshness=Day&count=20`;
  const { value } = await makeApiCall(endpoint, 'GET', {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_NEWS_API_KEY,
    'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
  });
  return value.map((news: News) => mapNews(news));
};

export default getNews;
