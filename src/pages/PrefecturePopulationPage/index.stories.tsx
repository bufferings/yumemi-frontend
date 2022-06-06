import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';
import { usePrefecturePopulations } from 'src/pages/PrefecturePopulationPage/usePrefecturePopulations';
import { usePrefectureSelections } from 'src/pages/PrefecturePopulationPage/usePrefectureSelections';

import { Presentation as PageLayout } from './PageLayout';

import { Presentation as Page } from '.';

type Props = {
  isLoadingPrefecturePopulations: boolean | undefined;
};

// Need to separate target component to prevent the following error:
// "Error: Rendered more hooks than during the previous render."
// Apparently, it's because Suspense option of useQuery is enabled.
const Target = ({ isLoadingPrefecturePopulations }: Props) => {
  const { prefectureSelections, togglePrefectureSelection } = usePrefectureSelections();
  const { isLoading, prefecturePopulations } = usePrefecturePopulations(prefectureSelections);

  const loading = isLoadingPrefecturePopulations ?? isLoading;

  return (
    <PageLayout onClickBackButton={() => {}}>
      <Page
        prefectureSelections={prefectureSelections}
        onTogglePrefectureSelection={togglePrefectureSelection}
        isLoadingPrefecturePopulations={loading}
        prefecturePopulations={prefecturePopulations}
      />
    </PageLayout>
  );
};

export default {
  component: Target,
} as ComponentMeta<typeof Target>;

export const Default: ComponentStoryObj<typeof Target> = {};

export const OnLoadingPopulations: ComponentStoryObj<typeof Target> = {
  args: {
    isLoadingPrefecturePopulations: true,
  },
};

const ThrowPromiseComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  throw new Promise(() => {});
};

export const OnLoadingPrefecture: ComponentStoryObj<typeof PageLayout> = {
  render: () => (
    <PageLayout onClickBackButton={() => {}}>
      <ThrowPromiseComponent />
    </PageLayout>
  ),
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
