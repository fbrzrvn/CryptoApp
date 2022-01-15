import { Crypto, CryptoMapped } from 'models/Crypto';

const mapCrypto = (source: Crypto): CryptoMapped => {
  return {
    '24hVolume': +source['24hVolume'],
    allTimeHigh: source.allTimeHigh,
    btcPrice: source.btcPrice,
    change: +source.change,
    description: source.description,
    iconUrl: source.iconUrl,
    links: source.links,
    marketCap: +source.marketCap,
    name: source.name,
    numberOfExchanges: +source.numberOfExchanges,
    numberOfMarkets: +source.numberOfMarkets,
    price: +source.price,
    rank: source.rank,
    symbol: source.symbol,
    sparkline: source.sparkline,
    supplyCorfirmed: source.supply.confirmed,
    supplyCirculating: +source.supply.circulating,
    supplyTotal: +source.supply.total,
    uuid: source.uuid,
    websiteUrl: source.websiteUrl,
  };
};

export default mapCrypto;
