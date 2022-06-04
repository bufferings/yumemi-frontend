import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Headline } from 'src/components/Headline';
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

type PresentationProps = {
  prefectureSelections: PrefectureSelection[];
  onTogglePrefectureSelection: (prefCode: number) => void;
  isLoadingPrefecturePopulations: boolean;
  prefecturePopulations: PrefecturePopulation[];
};

const DataSource = styled.p(
  ({ theme }) => css`
    ${theme.fonts.bodyS}
  `,
);

export const Presentation = ({
  prefectureSelections,
  onTogglePrefectureSelection,
  isLoadingPrefecturePopulations,
  prefecturePopulations,
}: PresentationProps) => (
  <Wrapper>
    <Headline>都道府県</Headline>
    <PrefectureSelector prefectureSelections={prefectureSelections} onToggleSelection={onTogglePrefectureSelection} />
    <Headline>総人口推移グラフ</Headline>
    <PopulationGraph isLoading={isLoadingPrefecturePopulations} prefecturePopulations={prefecturePopulations} />
    <DataSource>出典：RESAS（地域経済分析システム）</DataSource>
  </Wrapper>
);

const InBoundary = () => {
  const { prefectureSelections, togglePrefectureSelection } = usePrefectureSelections();
  const { isLoading, prefecturePopulations } = usePrefecturePopulations(prefectureSelections);
  return (
    <Presentation
      prefectureSelections={prefectureSelections}
      onTogglePrefectureSelection={togglePrefectureSelection}
      isLoadingPrefecturePopulations={isLoading}
      prefecturePopulations={prefecturePopulations}
    />
  );
};

export const PrefecturePopulationPage = () => (
  <PageLayout>
    <InBoundary />
  </PageLayout>
);
