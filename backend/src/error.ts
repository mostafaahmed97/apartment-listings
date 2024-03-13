import { NextFunction, Request, Response } from 'express';

class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export { NotFoundError };

export function errorHandlingMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // TODO: Replace with better error logging
  console.log({ err });

  res.status(500);

  if (err instanceof NotFoundError) {
    return res.status(404).send({ error: err.message });
  }

  // Default error code & msg
  return res.status(500).send({ error: 'An error has occured' });
}
