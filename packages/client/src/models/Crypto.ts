import { Cryptos } from './Cryptos';

export interface Crypto extends Cryptos {
  allTimeHigh: CryptoHistory;
  description: string;
  links: CryptoLinks[];
  numberOfExchanges: number;
  numberOfMarkets: number;
  sparkline: string[];
  supply: CryptoSupply;
  websiteUrl: string;
}
export interface CryptoLinks {
  name: string;
  url: string;
  type: string;
}
interface CryptoSupply {
  confirmed: boolean;
  circulating: string;
  total: string;
}
export interface CryptoHistory {
  price: string;
  timestamp: number;
}

export interface CryptoMapped {
  '24hVolume': number;
  allTimeHigh: CryptoHistory;
  change: number;
  description: string;
  iconUrl: string;
  links: CryptoLinks[];
  marketCap: number;
  name: string;
  numberOfExchanges: number;
  numberOfMarkets: number;
  price: number;
  rank: number;
  symbol: string;
  sparkline: string[];
  supplyCorfirmed: boolean;
  supplyCirculating: number;
  supplyTotal: number;
  uuid: string;
  websiteUrl: string;
}

export interface CryptoResponse {
  status: string;
  data: {
    coin: Crypto;
  };
}

export interface CryptoHistoryResponse {
  status: string;
  data: {
    change: string;
    history: CryptoHistory[];
  };
}

export interface CryptoTableData {
  title: string;
  value: string | number | boolean;
}
