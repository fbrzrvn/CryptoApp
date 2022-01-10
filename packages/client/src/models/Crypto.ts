import { Cryptos } from './Cryptos';

export interface Crypto extends Cryptos {
  allTimeHigh: CryptoAllTimeHigh[];
  description: string;
  links: CryptoLinks[];
  numberOfExchanges: number;
  numberOfMarkets: number;
  sparkline: string[];
  supply: CryptoSupply[];
  websiteUrl: string;
}
interface CryptoLinks {
  name: string;
  url: string;
  type: string;
}
interface CryptoSupply {
  confirmed: boolean;
  circulating: string;
  total: string;
}
interface CryptoAllTimeHigh {
  price: string;
  timestamp: number;
}

export interface CryptoMapped {
  '24hVolume': number;
  allTimeHigh: CryptoAllTimeHigh[];
  change: number;
  description: string;
  iconUrl: string;
  links: CryptoLinks[];
  marketCap: number;
  name: string;
  price: number;
  rank: number;
  symbol: string;
  sparkline: string[];
  uuid: string;
  websiteUrl: string;
}

export interface CryptoResponse {
  status: string;
  data: {
    coin: Crypto;
  };
}
