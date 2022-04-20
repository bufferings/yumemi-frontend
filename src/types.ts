export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PrefectureSelection = Prefecture & {
  selected: boolean;
};

export type PopulationPerYear = {
  year: number;
  value: number;
};

export type PrefecturePopulation = Prefecture & {
  populations: PopulationPerYear[];
};
