import {
  faLongArrowAltDown,
  faLongArrowAltUp,
} from '@fortawesome/free-solid-svg-icons';
import { CryptoMapped } from 'Models/Cryptos';
import React from 'react';
import { formatCurrency } from 'utils';
import {
  Card,
  CardFooter,
  CardFooterIcon,
  CardFooterText,
  CardFooterWrapper,
  CardHeader,
  CardHeaderSymbol,
  CardHeaderText,
  CardHeaderTitle,
  CardImg,
  CardPrice,
} from './styles';

const CryptoCard = (crypto: CryptoMapped) => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderText>
          <CardHeaderTitle>
            #{crypto.marketCupRank} {crypto.name}
          </CardHeaderTitle>
          <CardHeaderSymbol>{crypto.symbol}</CardHeaderSymbol>
        </CardHeaderText>
        <CardImg src={crypto.image} alt={crypto.name} />
      </CardHeader>
      <CardPrice>{formatCurrency(crypto.currentPrice)}</CardPrice>
      <CardFooter>
        <CardFooterWrapper>
          <CardFooterIcon icon={faLongArrowAltUp} status="up" />
          <CardFooterText>{formatCurrency(crypto.high24)}</CardFooterText>
        </CardFooterWrapper>
        <CardFooterWrapper>
          <CardFooterIcon icon={faLongArrowAltDown} status="down" />
          <CardFooterText>{formatCurrency(crypto.low24)}</CardFooterText>
        </CardFooterWrapper>
      </CardFooter>
    </Card>
  );
};

export default CryptoCard;
