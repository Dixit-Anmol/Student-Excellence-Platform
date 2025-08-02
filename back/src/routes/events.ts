// backend/src/routes/events.ts

import { Router } from 'express';

const router = Router();

// Example route
router.get('/', (req, res) => {
  res.send('Events route is working!');
});

export default router;
