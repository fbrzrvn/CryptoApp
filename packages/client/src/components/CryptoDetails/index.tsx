import { AreaChart } from 'components/Charts';
import CryptoStats from 'components/CryptoStats';
import CryptoSupply from 'components/CryptoSupply';
import { currencies } from 'constants/currencies';
import { iconsLinks } from 'constants/iconsLinks';
import { CurrencyContext } from 'context/Currency';
import { CryptoLinks, CryptoMapped } from 'models/Crypto';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {
  CryptoDescription,
  CryptoFlexLayout,
  CryptoHeader,
  CryptoIconLink,
  CryptoImage,
  CryptoLabel,
  CryptoLinksWrapper,
  CryptoNameLink,
  CryptoSection,
  CryptoSubtitle,
  CryptoTitle,
  CryptoTypeLink,
} from './styles';

interface CryptoDetailsProps {
  crypto: CryptoMapped;
}

const CryptoDetails: React.VFC<CryptoDetailsProps> = ({ crypto }) => {
  const { currency } = React.useContext(CurrencyContext);
  const [timePeriod, setTimePeriod] = React.useState('24h');

  const currentCurrency = currencies.find((c) => c.uuid === currency);

  const handleClick = (url: string): void => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <article>
      <CryptoHeader>
        <CryptoImage src={crypto.iconUrl} alt={crypto.name} />
        <CryptoTitle>
          {crypto.name} ({crypto.symbol})
        </CryptoTitle>
      </CryptoHeader>
      <CryptoSubtitle>
        {`${crypto.name} live price in ${currentCurrency.name}
        (${currentCurrency.symbol}). View value statistics, market cap and supply.`}
      </CryptoSubtitle>

      <CryptoSection>
        <AreaChart
          cryptoPrice={crypto.price}
          timePeriod={timePeriod}
          setTimePeriod={setTimePeriod}
        />
      </CryptoSection>

      <CryptoFlexLayout>
        <CryptoSection>
          <CryptoLabel>{crypto.symbol} value statistics</CryptoLabel>
          <CryptoSubtitle>
            An overview showing the statistics of {crypto.name}, such as the
            base and quote currency, the rank, and trading volume.
          </CryptoSubtitle>
          <CryptoStats {...crypto} />
        </CryptoSection>

        <CryptoSection>
          <CryptoLabel>Supply information</CryptoLabel>
          <CryptoSubtitle>
            View the total and circulating supply of {crypto.name}, including
            details on how the supplies are calculated.
          </CryptoSubtitle>
          <CryptoSupply {...crypto} />
        </CryptoSection>
      </CryptoFlexLayout>

      <CryptoDescription>
        <CryptoTitle>What is {crypto.name}?</CryptoTitle>
        {ReactHtmlParser(crypto.description)}
      </CryptoDescription>

      <CryptoSection>
        <CryptoLabel>{crypto.name} links</CryptoLabel>
        {crypto.links.map((link: CryptoLinks, i) => (
          <CryptoLinksWrapper key={i} onClick={() => handleClick(link.url)}>
            <CryptoIconLink icon={iconsLinks[link.type]} />
            <CryptoTypeLink>{link.type}</CryptoTypeLink>
            <CryptoNameLink>{link.name}</CryptoNameLink>
          </CryptoLinksWrapper>
        ))}
      </CryptoSection>
    </article>
  );
};

export default CryptoDetails;
