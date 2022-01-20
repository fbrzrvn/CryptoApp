export interface ICryptos {
  '24hVolume': string;
  btcPrice: string;
  change: string;
  coinrankingUrl: string;
  color: string;
  iconUrl: string;
  listedAt: number;
  lowVolume: boolean;
  marketCap: string;
  name: string;
  price: string;
  rank: number;
  sparkline: string[];
  symbol: string;
  tier: number;
  uuid: string;
}
export interface CryptosMapped {
  '24hVolume': number;
  btcPrice: string;
  change: number;
  iconUrl: string;
  marketCap: number;
  name: string;
  price: number;
  rank: number;
  symbol: string;
  sparkline: string[];
  uuid: string;
}

export interface CryptosStats {
  total: number;
  total24Volume: string;
  totalCoins: number;
  totalExchanges: number;
  totalMarketCap: string;
  totalMarkets: number;
}

export interface CryptosResponse {
  status: string;
  data: CryptosResponseData;
}

export interface CryptosResponseData {
  coins: ICryptos[];
  stats: CryptosStats;
}
