import { useCallback, useEffect, useState } from 'react';
import { usePrefecturesQuery } from 'src/api/usePrefecturesQuery';
import { PrefectureSelection } from 'src/types';

export const usePrefectureSelections = () => {
  const { isLoading, data: prefectures } = usePrefecturesQuery();
  const [prefectureSelections, setPrefectureSelections] = useState<PrefectureSelection[]>([]);

  useEffect(() => {
    if (prefectures) {
      const selections = prefectures.map((prefecture) => ({ ...prefecture, selected: false }));
      setPrefectureSelections(selections);
    } else {
      setPrefectureSelections([]);
    }
  }, [prefectures]);

  const togglePrefectureSelection = useCallback(
    (prefCode: number) => {
      setPrefectureSelections((prevState) =>
        prevState.map((p) => {
          if (p.prefCode !== prefCode) {
            return p;
          }
          return { ...p, selected: !p.selected };
        }),
      );
    },
    [setPrefectureSelections],
  );

  return { isLoading, prefectureSelections, togglePrefectureSelection };
};
