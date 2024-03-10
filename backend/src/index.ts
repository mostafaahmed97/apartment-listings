import app from './app';
import { config } from './config';
import { initDbConnection } from './db';

async function start() {
  await initDbConnection();

  app.listen(config.port, () => {
    console.log('Server started on port ', config.port);
  });
}

start();
