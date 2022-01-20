import { CryptosMapped, ICryptos } from 'models/Cryptos';

const mapCryptos = (source: ICryptos): CryptosMapped => {
  return {
    '24hVolume': +source['24hVolume'],
    btcPrice: source.btcPrice,
    change: +source.change,
    iconUrl: source.iconUrl,
    marketCap: +source.marketCap,
    name: source.name,
    price: +source.price,
    rank: source.rank,
    symbol: source.symbol,
    sparkline: source.sparkline,
    uuid: source.uuid,
  };
};

export default mapCryptos;
