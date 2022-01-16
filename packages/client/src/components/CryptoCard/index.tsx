import {
  faLongArrowAltDown,
  faLongArrowAltUp,
} from '@fortawesome/free-solid-svg-icons';
import { SparklineChart } from 'components/Charts';
import { CryptosMapped } from 'models/Cryptos';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Routes from 'Routes';
import { COLORS } from 'styles/Colors';
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

  const isChangePositive = crypto.change > 0;

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
        {crypto.sparkline && (
          <SparklineChart
            data={crypto.sparkline}
            color={isChangePositive ? COLORS.success500 : COLORS.danger500}
          />
        )}
        <CardFooterWrapper>
          <CardFooterIcon
            icon={isChangePositive ? faLongArrowAltUp : faLongArrowAltDown}
            status={isChangePositive ? 'up' : 'down'}
          />
          <CardFooterText>{crypto.change}%</CardFooterText>
        </CardFooterWrapper>
      </CardFooter>
    </Card>
  );
};

export default CryptoCard;
