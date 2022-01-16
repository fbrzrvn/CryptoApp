export const areaChartConfig = {
  options: {
    chart: {
      id: 'area-chart',
      zoom: { autoScaleYaxis: true },
    },
    dataLabels: { enabled: false },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 80, 100],
      },
    },
    yaxis: { labels: { show: false } },
    xaxis: {
      categories: undefined,
      name: 'Time',
      type: 'datetime' as 'datetime',
    },
    markers: { size: 0, style: 'hollow' },
    tooltip: { x: { show: false } },
  },
  series: [{ data: undefined, name: 'Price' }],
};
