import { Exchanges, ExchangesMapped } from 'Models/Exchanges';

const mapExchanges = (source: Exchanges): ExchangesMapped => {
  return {
    id: source.id,
    name: source.name,
    yearEstablished: source.year_established,
    country: source.country,
    url: source.url,
    image: source.image,
  };
};

export default mapExchanges;
