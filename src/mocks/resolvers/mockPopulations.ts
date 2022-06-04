import { ResponseResolver, MockedRequest, restContext } from 'msw';

import pop24 from './pop24.json';
import pop25 from './pop25.json';
import pop26 from './pop26.json';
import pop27 from './pop27.json';
import pop28 from './pop28.json';
import pop29 from './pop29.json';
import pop30 from './pop30.json';

const populations = new Map<string, { year: number; value: number }[]>();
populations.set('24', pop24);
populations.set('25', pop25);
populations.set('26', pop26);
populations.set('27', pop27);
populations.set('28', pop28);
populations.set('29', pop29);
populations.set('30', pop30);

export const mockPopulations: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  if (req.headers.get('x-api-key') !== 'dev') {
    return res(ctx.status(200), ctx.json({ statusCode: '403', message: 'Forbidden.', description: '' }));
  }

  const prefCode = req.url.searchParams.get('prefCode');

  if (prefCode === null) {
    return res(ctx.status(200), ctx.text('"400"'));
  }

  if (!populations.has(prefCode)) {
    return res(ctx.status(200), ctx.json({ message: null, result: null }));
  }

  return res(
    ctx.status(200),
    ctx.json({
      message: null,
      result: {
        boundaryYear: 2015,
        data: [{ label: '総人口', data: populations.get(prefCode) }],
      },
    }),
  );
};
