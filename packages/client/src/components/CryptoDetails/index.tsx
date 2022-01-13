import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CryptoTable from 'components/CryptoTable';
import { currencies } from 'constants/currencies';
import { iconsLinks } from 'constants/iconsLinks';
import { CurrencyContext } from 'context/Currency';
import millify from 'millify';
import { CryptoLinks, CryptoMapped, CryptoTableData } from 'models/Crypto';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { formatCurrency, getCurrencySymbol } from 'utils';
import {
  CryptoDescription,
  CryptoHeader,
  CryptoImage,
  CryptoLabel,
  CryptoLink,
  CryptoLinksWrapper,
  CryptoSection,
  CryptoSubtitle,
  CryptoTitle,
} from './styles';

const CryptoDetails: React.VFC<CryptoMapped> = (crypto) => {
  const { currency } = React.useContext(CurrencyContext);
  const currentCurrency = currencies.find((c) => c.uuid === currency);

  const valueStats: CryptoTableData[] = [
    {
      title: 'Price',
      value: formatCurrency(crypto.price, getCurrencySymbol(currency)),
    },
    { title: '24h Volume', value: millify(crypto['24hVolume']) },
    { title: 'Market Cap', value: millify(crypto.marketCap) },
    {
      title: 'All Time High',
      value: formatCurrency(
        +crypto.allTimeHigh.price,
        getCurrencySymbol(currency),
      ),
    },
  ];

  const infoStats: CryptoTableData[] = [
    { title: 'Total Supply', value: millify(crypto.supplyTotal) },
    { title: 'Circulating Supply', value: millify(crypto.supplyCirculating) },
    { title: 'N. Markets', value: crypto.numberOfMarkets },
    { title: 'N. Exchanges', value: crypto.numberOfExchanges },
  ];

  return (
    <article>
      <CryptoHeader>
        <CryptoImage src={crypto.iconUrl} alt={crypto.name} />
        <h1>{crypto.name}</h1>
      </CryptoHeader>
      <CryptoSubtitle>
        {`${crypto.name} live price in ${currentCurrency.name}
        (${currentCurrency.symbol}). View value statistics, market cap and supply.`}
      </CryptoSubtitle>

      <CryptoSection>
        <CryptoLabel>Value Statistics</CryptoLabel>
        <CryptoTable tableData={valueStats} />
      </CryptoSection>

      <CryptoSection>
        <CryptoLabel>Info Statistics</CryptoLabel>
        <CryptoTable tableData={infoStats} />
      </CryptoSection>

      <CryptoDescription>
        <CryptoTitle>What is {crypto.name}?</CryptoTitle>
        {ReactHtmlParser(crypto.description)}
      </CryptoDescription>

      <CryptoSection>
        <h3>{crypto.name} Links</h3>
        <CryptoLinksWrapper>
          {crypto.links.map((link: CryptoLinks, i) => (
            <CryptoLink
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={iconsLinks[link.type]} />
              {link.type}
            </CryptoLink>
          ))}
        </CryptoLinksWrapper>
      </CryptoSection>
    </article>
  );
};

export default CryptoDetails;
