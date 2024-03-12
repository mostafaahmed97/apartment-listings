import { Router } from 'express';
import { listingService } from './service';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const results = await listingService.all();

    res.send(results);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const listing = await listingService.find(id);

    res.send(listing);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const payload = req.body;
    const response = await listingService.create(payload);

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
});

export { router };
