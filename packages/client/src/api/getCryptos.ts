import mapCryptos from 'mappers/cryptos';
import { Cryptos, CryptosMapped } from 'models/Cryptos';
import makeApiCall from './api';

const getCryptos = async (
  currency: string = 'usd',
): Promise<CryptosMapped[]> => {
  const endPoint = `${process.env.REACT_APP_COIN_GEKO_API_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc`;
  const data = await makeApiCall(endPoint);
  return data.map((crypto: Cryptos) => mapCryptos(crypto));
};

export default getCryptos;
