import cluster from 'cluster';
import chalk from 'chalk';

const isMainThread = cluster.isMaster;

if (isMainThread) {
  console.log(chalk`{bold.gray Forking thread...}`);
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  console.log(chalk`{bold Running child thread}`);
  import('./server');
}
