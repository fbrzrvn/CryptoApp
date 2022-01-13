import {
  faLongArrowAltDown,
  faLongArrowAltUp,
} from '@fortawesome/free-solid-svg-icons';
import { CryptosMapped } from 'models/Cryptos';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Routes from 'Routes';
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

interface CryptoCardProps {
  crypto: CryptosMapped;
  currency: string;
}

const CryptoCard: React.VFC<CryptoCardProps> = ({ crypto, currency }) => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`${Routes.CRYPTOS}/${crypto.uuid}`);
  };

  return (
    <Card onClick={handleClick}>
      <CardHeader>
        <CardHeaderText>
          <CardHeaderTitle>{crypto.name}</CardHeaderTitle>
          <CardHeaderSymbol>{crypto.symbol}</CardHeaderSymbol>
        </CardHeaderText>
        <CardImg src={crypto.iconUrl} alt={crypto.name} />
      </CardHeader>
      <CardFooter>
        <CardPrice>{formatCurrency(crypto.price, currency)}</CardPrice>
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
