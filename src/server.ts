import express from 'express';
import chalk from 'chalk';
import doWork from './doWork';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  doWork(5000);
  res.send('Hi there');
});

app.get('/fast', (req, res) => {
  res.send('This was fast!');
});

app.listen(PORT, () => console.log(chalk`Server started on port {green ${PORT}}`));
