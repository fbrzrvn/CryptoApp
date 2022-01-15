import getCryptoHistory from 'api/getCryptoHistory';
import { Loader, LoadError } from 'components';
import { CurrencyContext } from 'context/Currency';
import { CryptoHistoryResponseData } from 'models/Crypto';
import React from 'react';
import Chart from 'react-apexcharts';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ChartWrapper, Wrapper } from './styles';

interface LineChartProps {
  cryptoPrice: number;
}

const LineChart: React.VFC<LineChartProps> = ({ cryptoPrice }) => {
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
      price.push(data.history[i].price.slice(0, 3));
      timestamp.push(
        new Date(data.history[i].timestamp * 1000).toLocaleDateString(),
      );
    }
  }

  const chartData = {
    options: {
      chart: {
        id: 'area-chart',
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: 'hollow',
      },
      xaxis: {
        categories: timestamp,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
      stroke: {
        curve: 'smooth' as 'smooth',
        width: 2,
      },
    },
    series: [
      {
        name: 'Price in EUR',
        data: price,
      },
    ],
  };

  return (
    <>
      <Wrapper>
        <div>
          <p>Price to EUR</p>
          <p>{cryptoPrice}</p>
        </div>
        <div>
          <p>{timePeriod} change</p>
          <p>
            {+data?.change > 0 ? '+' : '-'}
            {data?.change}%
          </p>
        </div>

        <select
          defaultValue={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
        >
          <option value="3h">3h</option>
          <option value="24h">24h</option>
          <option value="7d">7d</option>
          <option value="30d">30d</option>
          <option value="3m">3m</option>
          <option value="1y">1y</option>
          <option value="3y">3y</option>
          <option value="5y">5y</option>
        </select>
      </Wrapper>
      <ChartWrapper>
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
      </ChartWrapper>
    </>
  );
};

export default LineChart;
