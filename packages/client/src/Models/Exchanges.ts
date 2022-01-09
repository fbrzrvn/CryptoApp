export interface Exchanges {
  id: string;
  name: string;
  year_established: number;
  country: string;
  description: string;
  url: string;
  image: string;
  has_trading_incentive: boolean;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
}

export interface ExchangesMapped {
  id: string;
  name: string;
  yearEstablished: number;
  country: string;
  description: string;
  url: string;
  image: string;
  trustScoreRank: number;
}
