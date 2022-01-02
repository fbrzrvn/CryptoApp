import mapCryptos from 'mappers/cryptos';
import { Crypto, CryptoMapped } from 'Models/Cryptos';

const getCryptos = async () => {
  const endPoint = `${process.env.REACT_APP_COIN_GEKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc`;

  const res = await fetch(endPoint, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const data = await res.json();
  const mappedData: CryptoMapped[] = data.map((crypto: Crypto) =>
    mapCryptos(crypto),
  );
  return mappedData;
};

export default getCryptos;
