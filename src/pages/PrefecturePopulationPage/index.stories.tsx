import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';
import { usePrefecturePopulations } from 'src/pages/PrefecturePopulationPage/usePrefecturePopulations';
import { usePrefectureSelections } from 'src/pages/PrefecturePopulationPage/usePrefectureSelections';

import { Presentation as PageLayout } from './PageLayout';

import { Presentation as Page } from '.';

type Props = {
  isLoadingPrefecturesParam: boolean | undefined;
  isLoadingPopulationsParam: boolean | undefined;
};

// Need to separate target component to prevent the following error:
// "Error: Rendered more hooks than during the previous render."
// Apparently, it's because Suspense option of useQuery is enabled.
const Target = ({ isLoadingPrefecturesParam, isLoadingPopulationsParam }: Props) => {
  const {
    isLoading: isLoadingPrefectures,
    prefectureSelections,
    togglePrefectureSelection,
  } = usePrefectureSelections();
  const { isLoading: isLoadingPopulations, prefecturePopulations } = usePrefecturePopulations(prefectureSelections);

  return (
    <PageLayout onClickBackButton={() => {}}>
      <Page
        isLoadingPrefectures={isLoadingPrefecturesParam ?? isLoadingPrefectures}
        prefectureSelections={prefectureSelections}
        onTogglePrefectureSelection={togglePrefectureSelection}
        isLoadingPopulations={isLoadingPopulationsParam ?? isLoadingPopulations}
        prefecturePopulations={prefecturePopulations}
      />
    </PageLayout>
  );
};

export default {
  component: Target,
} as ComponentMeta<typeof Target>;

export const Default: ComponentStoryObj<typeof Target> = {};

export const OnLoadingPrefectures: ComponentStoryObj<typeof Target> = {
  args: {
    isLoadingPrefecturesParam: true,
  },
};

export const OnLoadingPopulations: ComponentStoryObj<typeof Target> = {
  args: {
    isLoadingPopulationsParam: true,
  },
};

const ThrowErrorComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  throw new Error();
};

export const OnError: ComponentStoryObj<typeof Page> = {
  render: () => (
    <PageLayout onClickBackButton={() => {}}>
      <ThrowErrorComponent />
    </PageLayout>
  ),
};
