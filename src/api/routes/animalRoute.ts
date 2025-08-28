import express from 'express';
import {
  deleteAnimal,
  getAnimals,
  getAnimal,
  postAnimal,
  putAnimal,
  getAnimalsByBox,
} from '../controllers/animalController';

const router = express.Router();

router.route('/').post(postAnimal).get(getAnimals);

router.route('/:id').get(getAnimal).put(putAnimal).delete(deleteAnimal);

router.route('/:id/location').get(getAnimalsByBox);

export default router;
