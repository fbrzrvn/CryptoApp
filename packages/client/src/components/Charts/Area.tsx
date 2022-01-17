import getCryptoHistory from 'api/getCryptoHistory';
import { Loader, LoadError } from 'components';
import ChartTimePeriodBtn from 'components/ChartTimePeriodBtn';
import CryptoOverview from 'components/CryptoOverview';
import { CurrencyContext } from 'context/Currency';
import { CryptoHistoryResponseData } from 'models/Crypto';
import React from 'react';
import Chart from 'react-apexcharts';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { areaChartConfig } from './config';

interface ChartProps {
  cryptoPrice: number;
  timePeriod: string;
  setTimePeriod: (timePeriod: string) => void;
}

const AreaChart: React.VFC<ChartProps> = ({
  cryptoPrice,
  timePeriod,
  setTimePeriod,
}) => {
  const { currency } = React.useContext(CurrencyContext);
  const { id } = useParams();

  const { data, error, isError, isLoading } = useQuery<
    CryptoHistoryResponseData,
    Error
  >(
    ['cryptoHistory', id, timePeriod, currency],
    () => getCryptoHistory(id, timePeriod, currency),
    { staleTime: Infinity },
  );

  const price = [];
  const timestamp = [];

  if (data) {
    for (let i = 0; i < data.history.length; i += 1) {
      price.push(+data.history[i].price);
      timestamp.push(new Date(data.history[i].timestamp * 1000).toISOString());
    }
  }

  const chartData = {
    options: {
      ...areaChartConfig.options,
      xaxis: {
        categories: timestamp,
        name: 'Time',
        type: 'datetime' as 'datetime',
      },
    },
    series: [{ data: price, name: 'Price' }],
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && <LoadError error={error.message} />}
      {data && (
        <>
          <CryptoOverview
            cryptoPrice={cryptoPrice}
            timePeriod={timePeriod}
            change={data.change}
          />
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            width="100%"
          />
          <ChartTimePeriodBtn
            timePeriod={timePeriod}
            setTimePeriod={setTimePeriod}
          />
        </>
      )}
    </>
  );
};

export default AreaChart;
