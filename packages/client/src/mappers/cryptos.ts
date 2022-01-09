import { Cryptos, CryptosMapped } from 'models/Cryptos';

const mapCryptos = (source: Cryptos): CryptosMapped => {
  return {
    '24hVolume': +source['24hVolume'],
    change: +source.change,
    iconUrl: source.iconUrl,
    marketCap: +source.marketCap,
    name: source.name,
    price: +source.price,
    rank: source.rank,
    symbol: source.symbol,
    uuid: source.uuid,
  };
};

export default mapCryptos;
