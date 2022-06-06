import { setupWorker } from 'msw';

import { handlers } from './handlers';

const worker = setupWorker(...handlers);

export async function startMockWorker() {
  await worker.start({
    onUnhandledRequest: 'bypass',
  });
}
