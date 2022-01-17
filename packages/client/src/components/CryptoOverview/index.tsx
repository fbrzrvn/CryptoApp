import { Select } from 'components';
import { CurrencyContext } from 'context/Currency';
import React from 'react';
import { formatCurrency, getCurrencySymbol } from 'utils';
import {
  ChangeText,
  Container,
  Label,
  PriceText,
  Wrapper,
  WrapperInner,
} from './styles';

interface CryptoOverviewProps {
  cryptoPrice: number;
  timePeriod: string;
  change: string;
}

const CryptoOverview: React.VFC<CryptoOverviewProps> = ({
  cryptoPrice,
  timePeriod,
  change,
}) => {
  const { currency } = React.useContext(CurrencyContext);

  const isChangePositive = +change > 0;

  return (
    <Container>
      <Wrapper>
        <WrapperInner>
          <Label>Price to {getCurrencySymbol(currency)}</Label>
          <PriceText>
            {formatCurrency(cryptoPrice, getCurrencySymbol(currency))}
          </PriceText>
        </WrapperInner>
        <WrapperInner>
          <Label>{timePeriod} change</Label>
          <ChangeText status={isChangePositive ? 'up' : 'down'}>
            {isChangePositive && '+'}
            {change}%
          </ChangeText>
        </WrapperInner>
      </Wrapper>
      <Select />
    </Container>
  );
};

export default CryptoOverview;
