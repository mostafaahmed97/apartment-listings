import { config } from './config';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('OK');
});

app.listen(config.port, () => {
  console.log('Server started on port ', config.port);
});
