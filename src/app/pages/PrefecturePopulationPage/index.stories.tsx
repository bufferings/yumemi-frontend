import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { ApiClientProvider } from 'src/api/ApiClientProvider';
import { Presentation as PageLayout } from 'src/app/layouts/PageLayout';
import { Presentation } from 'src/app/pages/PrefecturePopulationPage/index';
import { usePrefecturePopulations } from 'src/app/pages/PrefecturePopulationPage/usePrefecturePopulations';
import { usePrefectureSelections } from 'src/app/pages/PrefecturePopulationPage/usePrefectureSelections';

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
    <Presentation
      isLoadingPrefectures={isLoadingPrefecturesParam ?? isLoadingPrefectures}
      prefectureSelections={prefectureSelections}
      onTogglePrefectureSelection={togglePrefectureSelection}
      isLoadingPopulations={isLoadingPopulationsParam ?? isLoadingPopulations}
      prefecturePopulations={prefecturePopulations}
    />
  );
};

export default {
  component: Target,
} as ComponentMeta<typeof Target>;

export const Default: ComponentStoryObj<typeof Target> = {
  decorators: [
    (Story) => (
      <ApiClientProvider initialResasApiKey="dev">
        <PageLayout onClickBackButton={() => {}}>
          <Story />
        </PageLayout>
      </ApiClientProvider>
    ),
  ],
};

export const OnLoadingPrefectures: ComponentStoryObj<typeof Target> = {
  ...Default,
  args: {
    isLoadingPrefecturesParam: true,
  },
};

export const OnLoadingPopulations: ComponentStoryObj<typeof Target> = {
  ...Default,
  args: {
    isLoadingPopulationsParam: true,
  },
};

const ThrowErrorComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  throw new Error();
};

export const OnError: ComponentStoryObj<typeof Target> = {
  ...Default,
  render: () => <ThrowErrorComponent />,
};
