import express from 'express';

const router = express.Router();

router.route('/').post().get();

router.route('/:id').get().put().delete();

export default router;
