import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePrefecturesQuery } from 'src/api/usePrefecturesQuery';
import { PrefectureSelection } from 'src/types';

export const usePrefectureSelections = () => {
  const prefectures = usePrefecturesQuery();
  const [prefectureSelections, setPrefectureSelections] = useState<PrefectureSelection[]>([]);

  useEffect(() => {
    const selections = prefectures.map((prefecture) => ({ ...prefecture, selected: false }));
    setPrefectureSelections(selections);
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

  return useMemo(
    () => ({ prefectureSelections, togglePrefectureSelection }),
    [prefectureSelections, togglePrefectureSelection],
  );
};
