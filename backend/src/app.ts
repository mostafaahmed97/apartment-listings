import express, { ErrorRequestHandler } from 'express';

import { router as listingRoutes } from './listings.routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('OK');
});

app.use('/listings', listingRoutes);

// global error handler
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log({ err });

  res.status(500).send('');
};

app.use(errorHandler);

export default app;
