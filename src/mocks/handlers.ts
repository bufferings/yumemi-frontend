import { rest } from 'msw';
import { mockPopulations } from 'src/mocks/resolvers/mockPopulations';
import { mockPrefectures } from 'src/mocks/resolvers/mockPrefectures';

export const handlers = [
  rest.get('https://opendata.resas-portal.go.jp/api/v1/prefectures', mockPrefectures),
  rest.get('https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear', mockPopulations),
];
