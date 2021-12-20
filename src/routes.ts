import { Router } from 'express';

const router = Router();

router.get('/user', (req, res) => {
  res.json({ user: 'miguel' });
});

router.post('/user', (req, res) => {
  res.json({ user: 'miguel' });
});

export { router };
