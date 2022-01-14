import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { CryptoHistory } from 'models/Crypto';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { COLORS } from 'styles/Colors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface LineChartProps {
  data: CryptoHistory[];
  timePeriod: string;
  setTimePeriod: (timePeriod: string) => void;
}

const LineChart: React.VFC<LineChartProps> = ({ data }) => {
  const price = [];
  const timestamp = [];

  for (let i = 0; i < data.length; i += 1) {
    price.push(data[i].price);
    timestamp.push(new Date(data[i].timestamp * 1000).toLocaleDateString());
  }

  const charData = {
    labels: timestamp,
    datasets: [
      {
        label: 'Price in EUR',
        data: price,
        fill: false,
        backgroundColor: COLORS.gris100,
        borderColor: COLORS.blue500,
        tension: 0.1,
      },
    ],
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  return <Line data={charData} />;
};

export default LineChart;
