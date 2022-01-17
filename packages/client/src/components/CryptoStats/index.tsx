import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import {
  faInfoCircle,
  faMedal,
  faMoneyBillWave,
  faTint,
  faTrophy,
  faWater,
} from '@fortawesome/free-solid-svg-icons';
import { CurrencyContext } from 'context/Currency';
import { millify } from 'millify';
import { CryptoMapped } from 'models/Crypto';
import React from 'react';
import { CryptoStatsData } from 'types/props';
import { formatCurrency, getCurrencySymbol, IsLessThan } from 'utils';
import {
  InfoTooltip,
  InfoTooltipText,
  InfoTooltipWrapper,
  StatsComment,
  StatsContainer,
  StatsIcon,
  StatsInfoIcon,
  StatsTitle,
  StatsValue,
  StatsWrapper,
  StatsWrapperInner,
} from './styles';

const CrypoStats: React.VFC<CryptoMapped> = (crypto) => {
  const { currency } = React.useContext(CurrencyContext);
  const [showTooltip, setShowTooltip] = React.useState({
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
  });
  const isLessThan768 = IsLessThan(768);

  const data: CryptoStatsData[] = [
    {
      id: 11,
      icon: faMoneyBillWave,
      title: `Price to ${getCurrencySymbol(currency)}`,
      value: formatCurrency(crypto.price, getCurrencySymbol(currency)),
      hasTooltip: false,
    },
    {
      id: 12,
      icon: faBitcoin,
      title: 'Price to BTC',
      value: (+crypto.btcPrice).toFixed(4),
      hasTooltip: false,
    },
    {
      id: 13,
      icon: faTrophy,
      title: 'Rank',
      value: crypto.rank,
      hasTooltip: true,
      tooltipText: `A coin's place on coinranking global ranking (by highest market cup).`,
    },
    {
      id: 14,
      icon: faTint,
      title: '24h volume',
      value: millify(crypto['24hVolume']),
      hasTooltip: true,
      tooltipText:
        'The total volume of all trades with this coin on exchanges, in the past 24 hours.',
    },
    {
      id: 15,
      icon: faWater,
      title: 'Market cap',
      value: millify(crypto.marketCap),
      hasTooltip: true,
      tooltipText:
        'Market cap is the circulating supply times the price of a coin multiplied by its current price. So, if coin has 100 units outstanding, and is trading for $10 a coin, it has a market cap of $1,000.',
    },
    {
      id: 16,
      icon: faWater,
      title: 'Fully diluted market cap',
      titleMobile: 'F.D.M.C.',
      value: millify(crypto.price * crypto.supplyTotal),
      hasTooltip: true,
      tooltipText:
        "Fully diluted market cap is a coin's price multiplied by its total supply. It show what the market cup could be if all coins were in circulation, with the current price.",
    },
    {
      id: 17,
      icon: faMedal,
      title: 'All-time high (daily avg.)',
      titleMobile: 'All-time high',
      value: formatCurrency(
        +crypto.allTimeHigh.price,
        getCurrencySymbol(currency),
      ),
      comment: `on ${new Date(
        crypto.allTimeHigh.timestamp * 1000,
      ).toLocaleDateString()}`,
      hasTooltip: true,
      tooltipText:
        'All-time high (daily average) is the highest daily average price of a coin.',
    },
  ];

  return (
    <StatsContainer>
      {data?.map((item) => (
        <StatsWrapper key={item.id}>
          <StatsWrapperInner>
            <StatsIcon icon={item.icon} />
            {isLessThan768 ? (
              <StatsTitle>{item.titleMobile || item.title}</StatsTitle>
            ) : (
              <StatsTitle>{item.title}</StatsTitle>
            )}
            {item.hasTooltip && (
              <InfoTooltipWrapper>
                <StatsInfoIcon
                  icon={faInfoCircle}
                  onMouseEnter={() =>
                    setShowTooltip({
                      ...showTooltip,
                      [item.id]: true,
                    })
                  }
                  onMouseLeave={() =>
                    setShowTooltip({
                      ...showTooltip,
                      [item.id]: false,
                    })
                  }
                />
                <InfoTooltip show={showTooltip[item.id]}>
                  <InfoTooltipText>{item.tooltipText}</InfoTooltipText>
                </InfoTooltip>
              </InfoTooltipWrapper>
            )}
          </StatsWrapperInner>
          <div>
            <StatsValue>{item.value}</StatsValue>
            {item.comment && <StatsComment>{item.comment}</StatsComment>}
          </div>
        </StatsWrapper>
      ))}
    </StatsContainer>
  );
};

export default CrypoStats;
