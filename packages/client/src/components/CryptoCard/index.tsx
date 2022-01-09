import {
  faLongArrowAltDown,
  faLongArrowAltUp,
} from '@fortawesome/free-solid-svg-icons';
import millify from 'millify';
import { CryptosMapped } from 'models/Cryptos';
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

type CryptoCardProps = {
  crypto: CryptosMapped;
  currency: string;
};

const CryptoCard: React.FC<CryptoCardProps> = ({ crypto, currency }) => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderText>
          <CardHeaderTitle>
            #{crypto.rank} {crypto.name}
          </CardHeaderTitle>
          <CardHeaderSymbol>{crypto.symbol}</CardHeaderSymbol>
        </CardHeaderText>
        <CardImg src={crypto.iconUrl} alt={crypto.name} />
      </CardHeader>
      <CardPrice>{formatCurrency(crypto.price, currency)}</CardPrice>
      <CardFooter>
        <CardFooterText>{millify(crypto['24hVolume'])}</CardFooterText>
        <CardFooterWrapper>
          <CardFooterIcon
            icon={crypto.change > 0 ? faLongArrowAltUp : faLongArrowAltDown}
            status={crypto.change > 0 ? 'up' : 'down'}
          />
          <CardFooterText>{crypto.change}%</CardFooterText>
        </CardFooterWrapper>
      </CardFooter>
    </Card>
  );
};

export default CryptoCard;
