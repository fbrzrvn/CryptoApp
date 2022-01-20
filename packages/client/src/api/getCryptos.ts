import { CRYPTOS_FOR_PAGE } from 'constants/cryptoApi';
import { CryptosResponse, CryptosResponseData } from 'models/Cryptos';
import { CurrencyTypes } from 'types/enums';
import makeApiCall from './api';

const getCryptos = async (
  offset: number,
  currency: string = CurrencyTypes.EUR,
): Promise<CryptosResponseData> => {
  const endPoint = `${process.env.REACT_APP_COINRANKING_API_URL}/coins?offset=${offset}&limit=${CRYPTOS_FOR_PAGE}&referenceCurrencyUuid=${currency}`;
  const { data }: CryptosResponse = await makeApiCall(endPoint, 'GET', {
    'x-rapidapi-host': process.env.REACT_APP_COINRANKING_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
  });
  return data;
};

export default getCryptos;
