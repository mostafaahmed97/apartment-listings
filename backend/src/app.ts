import express, { ErrorRequestHandler } from 'express';

import { router as listingRoutes } from './listing/routes';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('OK');
});

app.use('/listings', listingRoutes);

// global error handler
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log({ err });

  res.status(500).send(err.message || 'Error occured');
};

app.use(errorHandler);

export default app;
