import {
  CryptoHistoryResponse,
  CryptoHistoryResponseData,
} from 'models/Crypto';
import { CurrencyTypes } from 'types/enums';
import makeApiCall from './api';

const getCryptoHistory = async (
  cryptoUuid: string,
  timePeriod: string,
  currency: string = CurrencyTypes.EUR,
): Promise<CryptoHistoryResponseData> => {
  const endPoint = `${process.env.REACT_APP_COINRANKING_API_URL}/coin/${cryptoUuid}/history?timePeriod=${timePeriod}&referenceCurrencyUuid=${currency}`;
  const { data }: CryptoHistoryResponse = await makeApiCall(endPoint, 'GET', {
    'x-rapidapi-host': process.env.REACT_APP_COINRANKING_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
  });
  return data;
};

export default getCryptoHistory;
