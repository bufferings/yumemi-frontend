import { setupWorker } from 'msw';

import { handlers } from './handlers';

const worker = setupWorker(...handlers);

export async function startMswWorker() {
  await worker.start({
    onUnhandledRequest: 'bypass',
  });
}
