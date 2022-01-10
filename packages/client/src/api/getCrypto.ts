import mapCrypto from 'mappers/crypto';
import { CryptoMapped, CryptoResponse } from 'models/Crypto';
import { CurrencyTypes } from 'types/enums';
import makeApiCall from './api';

const getCrypto = async (
  cryptoUuid: string,
  currency: string = CurrencyTypes.EUR,
): Promise<CryptoMapped> => {
  const endPoint = `${process.env.REACT_APP_COINRANKING_API_URL}/coin/${cryptoUuid}?timeperiod=7d?referenceCurrencyUuid=${currency}`;
  const {
    data: { coin },
  }: CryptoResponse = await makeApiCall(endPoint, 'GET', {
    'x-rapidapi-host': process.env.REACT_APP_COINRANKING_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
  });
  return mapCrypto(coin);
};

export default getCrypto;
