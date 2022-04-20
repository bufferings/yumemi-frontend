import { useQuery } from 'react-query';
import { useResasClient } from 'src/api/resas/useResasClient';

export const usePrefecturesQuery = () => {
  const resasClient = useResasClient();
  const result = useQuery('prefectures', () => resasClient.fetchPrefectures(), { suspense: true });
  return result.data!;
};
