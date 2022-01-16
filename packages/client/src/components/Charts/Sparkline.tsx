import React from 'react';
import Chart from 'react-apexcharts';

interface ChartProps {
  data: string[];
  color: string;
}

const SparklineChart: React.VFC<ChartProps> = ({ data, color }) => {
  const chartData = {
    options: {
      chart: {
        type: 'line' as 'line',
        sparkline: { enabled: true },
        stroke: { curve: 'straight' as 'straight' },
        yaxis: { min: 0 },
      },
      stroke: { width: 2 },
      colors: [color],
      dataLabels: { enabled: false },
      tooltip: { enabled: false },
      legend: { show: false },
    },
    series: [{ data }],
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="line"
      width="70"
    />
  );
};

export default SparklineChart;
