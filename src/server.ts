import express from 'express';
import chalk from 'chalk';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hi there');
});

app.listen(PORT, () => console.log(chalk`Server started on port {green ${PORT}}`));
