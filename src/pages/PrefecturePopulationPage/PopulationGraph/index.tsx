import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useMemo } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import { BarLoader } from 'react-spinners';
import { useSpinDelay } from 'spin-delay';
import { useHighCharts } from 'src/pages/PrefecturePopulationPage/PopulationGraph/useHighCharts';
import { PrefecturePopulation } from 'src/types';

type Props = {
  isLoading: boolean;
  prefecturePopulations: PrefecturePopulation[];
};

const LoaderWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  grid-row-gap: 15px;
`;

const LoadingLabel = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.onSurfaceVariant};
  `,
);

const MyLoading = () => {
  const theme = useTheme();
  return (
    <LoaderWrapper>
      <BarLoader color={theme.colors.primary} />
      <LoadingLabel>Loading...</LoadingLabel>
    </LoaderWrapper>
  );
};

const MyLoadingOverlay = styled(LoadingOverlay)(
  ({ theme }) => css`
    .MyLoader_overlay {
      background: rgba(200, 200, 200, 0.5);
    }
    .MyLoader_content {
      color: ${theme.colors.neutral100};
    }
  `,
);

const GraphWrapper = styled.div`
  // to make the graph responsible in the grid
  // https://github.com/highcharts/highcharts/issues/9491#issuecomment-1047591279
  min-width: 0;
`;

export const PopulationGraph = ({ isLoading, prefecturePopulations }: Props) => {
  const showSpinner = useSpinDelay(isLoading);
  const theme = useTheme();
  const { options, colors, markerSymbols, minYear, maxYear } = useHighCharts(theme);

  const series = useMemo(() => {
    if (prefecturePopulations.length === 0) {
      return [{ data: [], showInLegend: false }];
    }

    return prefecturePopulations.map((it) => ({
      id: it.prefCode,
      index: it.prefCode,
      name: it.prefName,
      color: colors[it.prefCode % colors.length],
      data: it.populations.filter((p) => p.year >= minYear && p.year <= maxYear).map((p) => [p.year, p.value]),
      showInLegend: true,
      marker: { symbol: markerSymbols[it.prefCode % markerSymbols.length] },
    }));
  }, [prefecturePopulations, colors, markerSymbols, minYear, maxYear]);

  return (
    <GraphWrapper>
      <MyLoadingOverlay active={showSpinner} spinner={<MyLoading />} classNamePrefix="MyLoader_">
        <HighchartsReact highcharts={Highcharts} options={{ ...options, series }} />
      </MyLoadingOverlay>
    </GraphWrapper>
  );
};
