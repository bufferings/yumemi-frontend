import styled from '@emotion/styled';
import React, { useCallback } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import { ApiClientBoundary } from 'src/api/ApiClientBoundary';
import { useApiClientInitializer } from 'src/api/useApiClientInitializer';
import { Headline } from 'src/components/Headline';
import { TopAppBar } from 'src/components/TopAppBar';
import { ErrorFallback } from 'src/pages/PrefecturePopulationPage/ErrorFallback';
import { PopulationGraph } from 'src/pages/PrefecturePopulationPage/PopulationGraph';
import { PrefectureSelector } from 'src/pages/PrefecturePopulationPage/PrefectureSelector';
import { SuspenseFallback } from 'src/pages/PrefecturePopulationPage/SuspenseFallback';
import { usePrefecturePopulations } from 'src/pages/PrefecturePopulationPage/usePrefecturePopulations';
import { usePrefectureSelections } from 'src/pages/PrefecturePopulationPage/usePrefectureSelections';
import { route } from 'src/pages/routes';

const PrefecturePopulationWrapper = styled.div`
  padding: 0 24px;
  display: grid;
  grid-row-gap: 24px;

  // to make the graph can shrink
  // https://github.com/highcharts/highcharts/issues/9491#issuecomment-1047591279
  grid-template-columns: minmax(0, 1fr);
`;

const PrefecturePopulation = () => {
  const { prefectureSelections, togglePrefectureSelection } = usePrefectureSelections();
  const { isLoading, prefecturePopulations } = usePrefecturePopulations(prefectureSelections);
  return (
    <PrefecturePopulationWrapper>
      <Headline>都道府県</Headline>
      <PrefectureSelector prefectureSelections={prefectureSelections} onToggleSelection={togglePrefectureSelection} />
      <Headline>総人口推移グラフ</Headline>
      <PopulationGraph isLoading={isLoading} prefecturePopulations={prefecturePopulations} />
    </PrefecturePopulationWrapper>
  );
};

const renderErrorFallback = ({ resetErrorBoundary }: FallbackProps) => <ErrorFallback onReset={resetErrorBoundary} />;

const Layout = styled.div`
  > {
    :first-child {
      margin-bottom: 24px;
    }
  }
`;

export const PrefecturePopulationPage = () => {
  const apiClientInitializer = useApiClientInitializer();
  const navigate = useNavigate();

  const handleResetApiKey = useCallback(() => {
    apiClientInitializer.reset();
    navigate(route.apiKeyInputPage);
  }, [apiClientInitializer, navigate]);

  return (
    <Layout>
      <TopAppBar title="都道府県別総人口推移グラフ" onBack={handleResetApiKey} />
      <ApiClientBoundary renderErrorFallback={renderErrorFallback} suspenseFallback={<SuspenseFallback />}>
        <PrefecturePopulation />
      </ApiClientBoundary>
    </Layout>
  );
};
