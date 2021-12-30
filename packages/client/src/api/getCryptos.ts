import mapCryptos from 'mappers/cryptos';
import { Crypto, CryptosApiResponse } from 'Models/Cryptos';

const getCryptos = async (limit: number = 50): Promise<CryptosApiResponse> => {
  const endPoint = `${process.env.REACT_APP_COIN_GEKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&sparkline=false`;
  try {
    const response: Response = await fetch(endPoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    if (response.ok) {
      const data = await response.json();
      const mappedCryptos = data.map((crypto: Crypto) => mapCryptos(crypto));
      return { data: mappedCryptos, error: null };
    }
    return { data: [], error: 'Error fetching cryptos' };
  } catch (error) {
    return { data: null, error } as CryptosApiResponse;
  }
};

export default getCryptos;
