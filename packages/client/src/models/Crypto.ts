import { Cryptos, CryptosMapped } from './Cryptos';

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

export interface CryptoMapped extends CryptosMapped {
  allTimeHigh: CryptoHistory;
  description: string;
  links: CryptoLinks[];
  numberOfExchanges: number;
  numberOfMarkets: number;
  supplyCorfirmed: boolean;
  supplyCirculating: number;
  supplyTotal: number;
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
  data: CryptoHistoryResponseData;
}

export interface CryptoHistoryResponseData {
  change: string;
  history: CryptoHistory[];
}
