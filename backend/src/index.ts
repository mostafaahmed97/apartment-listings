import { config } from './config';
import express from 'express';
import { initDbConnection } from './db';

const app = express();

app.get('/', (req, res) => {
  res.send('OK');
});

async function start() {
  await initDbConnection();

  app.listen(config.port, () => {
    console.log('Server started on port ', config.port);
  });
}

start();
