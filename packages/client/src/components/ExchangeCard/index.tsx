import { ExchangesMapped } from 'models/Exchanges';
import React from 'react';
import {
  Card,
  CardDetails,
  CardHeader,
  CardHeaderText,
  CardHeaderTextDetails,
  CardHeaderTitle,
  CardImg,
} from './styles';

const ExchangeCard: React.VFC<ExchangesMapped> = (exchange) => {
  const handleClick = () => {
    window.open(exchange.url, '_blank', 'noopener noreferrer');
  };

  return (
    <Card onClick={handleClick}>
      <CardHeader>
        <CardHeaderText>
          <CardHeaderTitle>{`#${exchange.trustScoreRank} ${exchange.name}`}</CardHeaderTitle>
          <CardHeaderTextDetails>
            <CardDetails>{exchange?.country}</CardDetails>
            <CardDetails>{exchange?.yearEstablished}</CardDetails>
          </CardHeaderTextDetails>
        </CardHeaderText>
        <CardImg src={exchange.image} alt={exchange.name} />
      </CardHeader>
    </Card>
  );
};

export default ExchangeCard;
