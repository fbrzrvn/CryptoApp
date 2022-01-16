import getCryptoHistory from 'api/getCryptoHistory';
import { Loader, LoadError } from 'components';
import { CurrencyContext } from 'context/Currency';
import { CryptoHistoryResponseData } from 'models/Crypto';
import React from 'react';
import Chart from 'react-apexcharts';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

interface ChartProps {
  cryptoPrice: number;
}

const AreaChart: React.VFC<ChartProps> = ({ cryptoPrice }) => {
  const { currency } = React.useContext(CurrencyContext);
  const [timePeriod, setTimePeriod] = React.useState('24h');

  const { id } = useParams();

  const { data, error, isError, isLoading } = useQuery<
    CryptoHistoryResponseData,
    Error
  >(
    ['cryptoHistory', id, timePeriod, currency],
    () => getCryptoHistory(id, timePeriod, currency),
    {
      staleTime: Infinity,
    },
  );

  const price = [];
  const timestamp = [];

  if (data) {
    for (let i = 0; i < data.history.length; i += 1) {
      price.push(data.history[i].price);
      timestamp.push(new Date(data.history[i].timestamp * 1000).toISOString());
    }
  }

  const chartData = {
    options: {
      chart: { id: 'area-chart', zoom: { autoScaleYaxis: true } },
      dataLabels: { enabled: false },
      markers: { size: 0, style: 'hollow' },
      xaxis: { categories: timestamp, labels: { show: false } },
      yaxis: { labels: { show: false } },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
    },
    series: [{ data: price, name: 'Price' }],
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && <LoadError error={error.message} />}
      {data && (
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          width="100%"
        />
      )}
    </>
  );
};

export default AreaChart;
