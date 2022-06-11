import { useMemo } from 'react';
import { usePopulationsQueries } from 'src/api/usePopulationsQueries';
import { PrefectureSelection } from 'src/types';

export const usePrefecturePopulations = (prefectureSelections: PrefectureSelection[]) => {
  const queryResults = usePopulationsQueries(prefectureSelections.filter((it) => it.selected));
  const isLoading = queryResults.some((result) => result.isLoading);
  const prefecturePopulations = useMemo(() => queryResults.flatMap((result) => result.data || []), [queryResults]);
  return useMemo(
    () => ({
      isLoading,
      prefecturePopulations,
    }),
    [isLoading, prefecturePopulations],
  );
};
