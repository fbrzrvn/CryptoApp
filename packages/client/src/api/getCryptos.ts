import mapCryptos from 'mappers/cryptos';
import { Crypto, CryptoMapped } from 'models/Cryptos';
import makeApiCall from './api';

const getCryptos = async (
  currency: string = 'usd',
): Promise<CryptoMapped[]> => {
  const endPoint = `${process.env.REACT_APP_COIN_GEKO_API_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc`;
  const data = await makeApiCall(endPoint);
  return data.map((crypto: Crypto) => mapCryptos(crypto));
};

export default getCryptos;
