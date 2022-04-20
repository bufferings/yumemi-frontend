import { useQueries } from 'react-query';
import { useResasClient } from 'src/api/resas/useResasClient';
import { PopulationPerYear, Prefecture, PrefecturePopulation } from 'src/types';

export const usePopulationsQueries = (prefectures: Prefecture[]) => {
  const resasClient = useResasClient();
  return useQueries(
    prefectures.map((it) => ({
      queryKey: ['population', it.prefCode],
      queryFn: () => resasClient.fetchPopulations(it.prefCode),
      select: (populations: PopulationPerYear[]): PrefecturePopulation => ({
        ...it,
        populations,
      }),
    })),
  );
};
