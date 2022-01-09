import mapCryptos from 'mappers/cryptos';
import { Cryptos, CryptosMapped } from 'models/Cryptos';
import { CurrencyTypes } from 'types/enums';
import makeApiCall from './api';

const getCryptos = async (
  currency: string = CurrencyTypes.EUR,
): Promise<CryptosMapped[]> => {
  const endPoint = `${process.env.REACT_APP_COINRANKING_API_URL}/coins?referenceCurrencyUuid=${currency}`;
  const {
    data: { coins },
  } = await makeApiCall(endPoint, 'GET', {
    'x-rapidapi-host': process.env.REACT_APP_COINRANKING_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
  });
  return coins.map((crypto: Cryptos) => mapCryptos(crypto));
};

export default getCryptos;
