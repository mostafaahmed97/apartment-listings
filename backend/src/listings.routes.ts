import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  const page = Number(req.query.page) || 1;

  res.send('all listings, page ' + page);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.send('listing with id ' + id);
});

router.post('/', (req, res) => {
  const payload = req.body;

  res.status(201).json(payload);
});

export { router };
