import { Crypto, CryptoMapped } from 'models/Cryptos';

const mapCryptos = (source: Crypto): CryptoMapped => {
  return {
    id: source.id,
    symbol: source.symbol,
    name: source.name,
    image: source.image,
    currentPrice: source.current_price,
    marketCupRank: source.market_cap_rank,
    marketCap: source.market_cap,
    high24: source.high_24h,
    low24: source.low_24h,
    priceChangePercentage24: source.price_change_percentage_24h,
  };
};

export default mapCryptos;
