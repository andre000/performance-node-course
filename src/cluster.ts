import os from 'os';
import cluster from 'cluster';
import chalk from 'chalk';

const isMainThread = cluster.isMaster;

if (isMainThread) {
  console.log(chalk`{bold.gray Forking thread...}`);
  const CPUCount = os.cpus().length;
  // Creating as many children as cores in CPU
  Array(CPUCount).fill(true).map(() => cluster.fork());
} else {
  console.log(chalk`{bold Running child thread}`);
  import('./server');
}
