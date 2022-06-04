import { ResponseResolver, MockedRequest, restContext } from 'msw';

export const mockPrefectures: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  if (req.headers.get('x-api-key') !== 'dev') {
    return res(ctx.status(200), ctx.json({ statusCode: '403', message: 'Forbidden.', description: '' }));
  }
  return res(
    ctx.status(200),
    ctx.json({
      message: null,
      result: [
        { prefCode: 24, prefName: '三重県' },
        { prefCode: 25, prefName: '滋賀県' },
        { prefCode: 26, prefName: '京都府' },
        { prefCode: 27, prefName: '大阪府' },
        { prefCode: 28, prefName: '兵庫県' },
        { prefCode: 29, prefName: '奈良県' },
        { prefCode: 30, prefName: '和歌山県' },
      ],
    }),
  );
};
