/**
 * Function that simulates heavy work
 * @param duration Duration to run the function in miliseconds
 */
export default function doWork(duration: number): void {
  const start = Date.now();
  // eslint-disable-next-line no-empty
  while (Date.now() - start < duration) {}
}
