import { Theme } from '@emotion/react';
import Highcharts from 'highcharts';
import { useMemo } from 'react';

const minYear = 1980;

const currentYear = new Date().getFullYear();

const maxYear = currentYear - (currentYear % 5);

const markerSymbols = ['circle', 'square', 'diamond', 'triangle', 'triangle-down'];

const colors = ['#ff4b00', '#03af7a', '#005aff', '#4dc4ff', '#f6aa00', '#804000'];

const createOptions = (theme: Theme): Highcharts.Options => ({
  chart: {
    backgroundColor: theme.colors.surface0,
    style: {
      fontFamily: theme.fonts.fontFamily,
      fontSize: '12px',
    },
  },
  title: {
    text: '',
  },
  xAxis: {
    title: {
      text: '年度',
    },
    gridLineWidth: 1,
    tickInterval: 5,
    min: minYear,
    max: maxYear,
    crosshair: true,
  },
  yAxis: {
    title: {
      text: '総人口（万人）',
    },
    minTickInterval: 50000,
    gridLineWidth: 1,
    labels: {
      formatter() {
        return `${(this.value as number) / 10000}`;
      },
    },
  },
  tooltip: {
    headerFormat: '',
    useHTML: true,
    formatter() {
      const value = (Math.round((this.y as number) / 1000) / 10).toFixed(1);
      return `
        <div style="margin-bottom: 16px">${this.x as number}年</div>
        <div>${this.series.name}</div>
        <div>
          <span style="font-size: 2rem; color: ${this.color as string}">${value}</span>
          <span>万人</span>
        </div>`;
    },
    shape: 'square',
    borderWidth: 0,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    itemStyle: {
      cursor: 'default',
      fontWeight: 'normal',
    },
    itemHoverStyle: {
      fontWeight: 'bold',
    },
    itemMarginBottom: 4,
  },
  plotOptions: {
    series: {
      marker: {
        fillColor: '#FFFFFF',
        lineWidth: 2,
        lineColor: undefined, // inherit from series
        radius: 5,
      },
      events: {
        legendItemClick(e) {
          e.preventDefault();
        },
      },
    },
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
          },
        },
      },
    ],
  },
});

export const useHighCharts = (theme: Theme) => {
  const options = useMemo(() => createOptions(theme), [theme]);
  return { options, colors, markerSymbols, minYear, maxYear };
};
