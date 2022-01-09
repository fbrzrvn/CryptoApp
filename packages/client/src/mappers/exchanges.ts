import { Exchanges, ExchangesMapped } from 'models/Exchanges';

const mapExchanges = (source: Exchanges): ExchangesMapped => {
  return {
    id: source.id,
    name: source.name,
    yearEstablished: source.year_established,
    country: source.country,
    description: source.description,
    url: source.url,
    image: source.image,
    trustScoreRank: source.trust_score_rank,
  };
};

export default mapExchanges;
