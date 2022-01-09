import mapExchanges from 'mappers/exchanges';
import { Exchanges, ExchangesMapped } from 'models/Exchanges';
import makeApiCall from './api';

const getExchanges = async (): Promise<ExchangesMapped[]> => {
  const endPoint = `${process.env.REACT_APP_COIN_GEKO_API_URL}/exchanges`;
  const data: Exchanges[] = await makeApiCall(endPoint);
  return data.map((exchange: Exchanges) => mapExchanges(exchange));
};

export default getExchanges;
