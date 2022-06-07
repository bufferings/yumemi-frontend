import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Headline } from 'src/components/Headline';
import { LoadingPrefecturesPanel } from 'src/pages/PrefecturePopulationPage/LoadingPrefecturesPanel';
import { PrefecturePopulation, PrefectureSelection } from 'src/types';

import { PageLayout } from './PageLayout';
import { PopulationGraph } from './PopulationGraph';
import { PrefectureSelector } from './PrefectureSelector';
import { usePrefecturePopulations } from './usePrefecturePopulations';
import { usePrefectureSelections } from './usePrefectureSelections';

const Wrapper = styled.div`
  padding: 0 24px;
  display: grid;
  grid-row-gap: 24px;

  // to enable the graph to shrink
  // https://github.com/highcharts/highcharts/issues/9491#issuecomment-1047591279
  grid-template-columns: minmax(0, 1fr);

  p {
    text-align: right;
  }
`;

const DataSource = styled.p(
  ({ theme }) => css`
    ${theme.fonts.bodyS}
  `,
);

type PresentationProps = {
  isLoadingPrefectures: boolean;
  prefectureSelections: PrefectureSelection[];
  onTogglePrefectureSelection: (prefCode: number) => void;
  isLoadingPopulations: boolean;
  prefecturePopulations: PrefecturePopulation[];
};

export const Presentation = ({
  isLoadingPrefectures,
  prefectureSelections,
  onTogglePrefectureSelection,
  isLoadingPopulations,
  prefecturePopulations,
}: PresentationProps) => {
  if (isLoadingPrefectures) {
    return <LoadingPrefecturesPanel />;
  }
  return (
    <Wrapper>
      <Headline>都道府県</Headline>
      <PrefectureSelector prefectureSelections={prefectureSelections} onToggleSelection={onTogglePrefectureSelection} />
      <Headline>総人口推移グラフ</Headline>
      <PopulationGraph isLoading={isLoadingPopulations} prefecturePopulations={prefecturePopulations} />
      <DataSource>出典：RESAS（地域経済分析システム）</DataSource>
    </Wrapper>
  );
};

const InBoundary = () => {
  const {
    isLoading: isLoadingPrefectures,
    prefectureSelections,
    togglePrefectureSelection,
  } = usePrefectureSelections();
  const { isLoading: isLoadingPopulations, prefecturePopulations } = usePrefecturePopulations(prefectureSelections);

  return (
    <Presentation
      isLoadingPrefectures={isLoadingPrefectures}
      prefectureSelections={prefectureSelections}
      onTogglePrefectureSelection={togglePrefectureSelection}
      isLoadingPopulations={isLoadingPopulations}
      prefecturePopulations={prefecturePopulations}
    />
  );
};

export const PrefecturePopulationPage = () => (
  <PageLayout>
    <InBoundary />
  </PageLayout>
);
