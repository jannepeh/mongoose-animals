import express, {Request, Response} from 'express';
import {MessageResponse} from '../types/Messages';
import categoryRoute from './routes/categoryRoute';

const router = express.Router();

router.get<{}, MessageResponse>('/', (_req: Request, res: Response) => {
  res.json({
    message: 'api v1',
  });
});

router.use('/categories', categoryRoute);
router.use('/animals', animalRoute);
router.use('/species', speciesRoute);

export default router;
