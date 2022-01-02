import mapCryptos from 'mappers/cryptos';
import { Crypto } from 'Models/Cryptos';
import makeApiCall from './api';

const getCryptos = async () => {
  const endPoint = `${process.env.REACT_APP_COIN_GEKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc`;
  const data = await makeApiCall(endPoint);
  return data.map((crypto: Crypto) => mapCryptos(crypto));
};

export default getCryptos;
