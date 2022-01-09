interface currency {
  uuid: string;
  iconUrl: string;
  name: string;
  symbol: string;
  sign: string;
}

export const currencies: currency[] = [
  {
    uuid: 'OEomm4hQzk_M',
    iconUrl: null,
    name: 'Australian Dollar',
    symbol: 'AUD',
    sign: '$',
  },
  {
    uuid: '_4s0A3Uuu5ML',
    iconUrl: null,
    name: 'Canadian dollar',
    symbol: 'CAD',
    sign: 'C$',
  },
  {
    uuid: 'eXMH_Xz9YUhh',
    iconUrl: 'https://cdn.coinranking.com/lJBdOdg9C/chf.svg',
    name: 'Swiss franc',
    symbol: 'CHF',
    sign: null,
  },
  {
    uuid: '5k-_VTxqtCEI',
    iconUrl: 'https://cdn.coinranking.com/fz3P5lsJY/eur.svg',
    name: 'Euro',
    symbol: 'EUR',
    sign: '€',
  },
  {
    uuid: 'Hokyui45Z38f',
    iconUrl: 'https://cdn.coinranking.com/2wzSKKrBp/gbp.svg',
    name: 'British Pound Sterling',
    symbol: 'GBP',
    sign: '£',
  },
  {
    uuid: '7DLFntuafXpZ',
    iconUrl: 'https://cdn.coinranking.com/GDZ-GInRz/jpy.svg',
    name: 'Japanese Yen',
    symbol: 'JPY',
    sign: '¥',
  },
  {
    uuid: 'SWsKnEB9u6Gt',
    iconUrl: 'https://cdn.coinranking.com/EyaNNwoyq/mexican-peso.svg',
    name: 'Mexican Peso',
    symbol: 'MXN',
    sign: '$',
  },
  {
    uuid: 'jlhBX5IMqZzc',
    iconUrl: 'https://cdn.coinranking.com/J5pqGfM_d/new-zealand-dollar.svg',
    name: 'New Zealand Dollar',
    symbol: 'NZD',
    sign: '$',
  },
  {
    uuid: 'yhjMzLPhuIDl',
    iconUrl: 'https://cdn.coinranking.com/kz6a7w6vF/usd.svg',
    name: 'US Dollar',
    symbol: 'USD',
    sign: '$',
  },
  {
    uuid: '5IPIPRCm3C6O',
    iconUrl: 'https://cdn.coinranking.com/Mn61ZjrQr/south-african-rand.svg',
    name: 'South African Rand',
    symbol: 'ZAR',
    sign: 'R',
  },
];
