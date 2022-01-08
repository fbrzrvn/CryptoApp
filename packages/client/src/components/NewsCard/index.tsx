import { faClock } from '@fortawesome/free-regular-svg-icons';
import { NewsMapped } from 'models/News';
import React from 'react';
import truncateText from 'utils/truncateText';
import {
  Card,
  CardBody,
  CardDescription,
  CardHeader,
  CardHeaderDate,
  CardHeaderDateIcon,
  CardHeaderDateText,
  CardTitle,
} from './styles';

const NewsCard: React.FC<NewsMapped> = (news) => {
  const handleClick = () => {
    window.open(news.url, '_blank', 'noopener noreferrer');
  };

  return (
    <Card onClick={handleClick}>
      <CardHeader>
        <h5>{news.provider[0].name}</h5>
        <CardHeaderDate>
          <CardHeaderDateIcon icon={faClock} />
          <CardHeaderDateText>
            {news.datePublished.slice(0, 10)}
          </CardHeaderDateText>
        </CardHeaderDate>
      </CardHeader>
      <CardBody>
        <CardTitle>{news.name}</CardTitle>
        <CardDescription>{truncateText(news.description)}</CardDescription>
      </CardBody>
    </Card>
  );
};

export default NewsCard;
