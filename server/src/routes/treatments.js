import express from 'express';
import Treatment from '../models/Treatment.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth(['admin']), async (req, res) => {
  const list = await Treatment.find().sort({ createdAt: -1 });
  res.json(list);
});

router.post('/', auth(['admin']), async (req, res) => {
  const created = await Treatment.create(req.body);
  res.status(201).json(created);
});

export default router;
