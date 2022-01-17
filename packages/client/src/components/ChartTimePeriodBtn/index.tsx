import React from 'react';
import { Btn, Wrapper } from './styles';

interface ChartTimePeriodBtnProps {
  timePeriod: string;
  setTimePeriod: (timePeriod: string) => void;
}

const ChartTimePeriodBtn: React.VFC<ChartTimePeriodBtnProps> = ({
  timePeriod,
  setTimePeriod,
}) => {
  const validTimePeriods = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];

  const handleClick = (time: string): void => {
    setTimePeriod(time);
  };

  return (
    <Wrapper>
      {validTimePeriods.map((time) => (
        <Btn
          key={time}
          type="button"
          onClick={() => handleClick(time)}
          isActive={time === timePeriod}
        >
          {time}
        </Btn>
      ))}
    </Wrapper>
  );
};

export default ChartTimePeriodBtn;
