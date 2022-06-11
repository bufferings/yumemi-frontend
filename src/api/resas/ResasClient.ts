import { PopulationPerYear, Prefecture } from 'src/types';

const RESAS_ENDPOINT = 'https://opendata.resas-portal.go.jp';

type PrefecturesApiResponse = {
  result: Prefecture[];
};

type PopulationApiResponse = {
  result: {
    data: [{ data: PopulationPerYear[] }];
  };
};

export class ResasClient {
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async fetchPrefectures() {
    const response = await fetch(`${RESAS_ENDPOINT}/api/v1/prefectures`, this.option());
    if (!response.ok) {
      throw new Error(`RESAS API response was not ok. status=${response.status}`);
    }
    const json = (await response.json()) as PrefecturesApiResponse;
    if (!json.result) {
      throw new Error(`RESAS API result was not ok. json=${JSON.stringify(json)}`);
    }
    return json.result;
  }

  public async fetchPopulations(prefCode: number) {
    const q = new URLSearchParams({ prefCode: String(prefCode), cityCode: '-' }).toString();
    const response = await fetch(`${RESAS_ENDPOINT}/api/v1/population/composition/perYear?${q}`, this.option());
    if (!response.ok) {
      throw new Error(`RESAS API response was not ok. status=${response.status}`);
    }
    const json = (await response.json()) as PopulationApiResponse;
    if (!json.result) {
      throw new Error(`RESAS API result was not ok. json=${JSON.stringify(json)}`);
    }
    return json.result.data[0].data;
  }

  private option() {
    return {
      headers: {
        'x-api-key': this.apiKey,
      },
    };
  }
}
