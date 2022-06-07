import { useQuery } from 'react-query';
import { useResasClient } from 'src/api/resas/useResasClient';

export const usePrefecturesQuery = () => {
  const resasClient = useResasClient();
  return useQuery('prefectures', () => resasClient.fetchPrefectures());
};
