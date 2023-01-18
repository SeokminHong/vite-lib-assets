let worker: Worker | undefined;

function initWorker() {
  if (worker) {
    return;
  }
  worker = new Worker(new URL('./test.worker.ts', import.meta.url));
}

export function message(input: string) {
  initWorker();
  worker?.postMessage(input);
}
