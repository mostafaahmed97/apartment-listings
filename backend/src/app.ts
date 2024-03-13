import express, { ErrorRequestHandler } from 'express';

import cors from 'cors';
import { errorHandlingMiddleware } from './error';
import { router as listingRoutes } from './listing/routes';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('OK');
});

app.use('/listings', listingRoutes);

// global error handler
app.use(errorHandlingMiddleware);

export default app;
