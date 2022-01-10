import { Crypto, CryptoMapped } from 'models/Crypto';

const mapCrypto = (source: Crypto): CryptoMapped => {
  return {
    '24hVolume': +source['24hVolume'],
    allTimeHigh: source.allTimeHigh,
    change: +source.change,
    description: source.description,
    iconUrl: source.iconUrl,
    links: source.links,
    marketCap: +source.marketCap,
    name: source.name,
    price: +source.price,
    rank: source.rank,
    symbol: source.symbol,
    sparkline: source.sparkline,
    uuid: source.uuid,
    websiteUrl: source.websiteUrl,
  };
};

export default mapCrypto;
