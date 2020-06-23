import cluster from 'cluster';
import chalk from 'chalk';

process.env.UV_THREADPOOL_SIZE = '1';

const isMainThread = cluster.isMaster;

if (isMainThread) {
  console.log(chalk`{bold.gray Forking thread...}`);
  cluster.fork();
} else {
  console.log(chalk`{bold Running child thread}`);
  import('./server');
}
