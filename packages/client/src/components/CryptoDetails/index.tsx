import { currencies } from 'constants/currencies';
import { CurrencyContext } from 'context/Currency';
import millify from 'millify';
import { CryptoLinks, CryptoMapped } from 'models/Crypto';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { formatCurrency, getCurrencySymbol } from 'utils';

const CryptoDetails: React.VFC<CryptoMapped> = (crypto) => {
  const { currency } = React.useContext(CurrencyContext);
  const currentCurrency = currencies.find((c) => c.uuid === currency);

  return (
    <>
      <h1>{crypto.name}</h1>
      <p>
        {`${crypto.name} live price in ${currentCurrency.name}
        (${currentCurrency.symbol}). View value statistics, market cap and supply.`}
      </p>

      <h3>Value Statistics</h3>
      <p>
        An overview showing the statistics of {crypto.name}, such as the base
        and quote currency, the rank, and trading volume.
      </p>
      <p>Price: {formatCurrency(crypto.price, getCurrencySymbol(currency))}</p>
      <p>Rank: {crypto.rank}</p>
      <p>24h Volume: {millify(crypto['24hVolume'])}</p>
      <p>Market Cap: {millify(crypto.marketCap)}</p>
      <p>
        All-time-high(daily avg.):{' '}
        {formatCurrency(+crypto.allTimeHigh.price, getCurrencySymbol(currency))}
      </p>

      <h3>Other Stats Info</h3>
      <p>
        An overview showing the statistics of {crypto.name}, such as the base
        and quote currency, the rank, and trading volume.
      </p>
      <p>Number Of Exchanges: {crypto.numberOfExchanges}</p>
      <p>Number Of Markets: {crypto.numberOfMarkets}</p>
      <p>Aprroved Supply: {crypto.supplyCorfirmed ? 'yes' : 'nope'}</p>
      <p>Circulating Supply: {millify(crypto.supplyCirculating)}</p>
      <p>Total Supply: {millify(crypto.supplyTotal)}</p>

      <h3>What is {crypto.name}?</h3>
      <div>{ReactHtmlParser(crypto.description)}</div>

      <h4>{crypto.name} Links</h4>
      <ul>
        {crypto.links.map((link: CryptoLinks, i: number) => (
          <li key={i}>
            <span>{link.type}</span>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {' '}
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CryptoDetails;
