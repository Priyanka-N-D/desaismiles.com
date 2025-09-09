import express from 'express';
import Medicine from '../models/Medicine.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth(['admin']), async (req, res) => {
  const list = await Medicine.find().sort({ createdAt: -1 });
  res.json(list);
});

router.post('/', auth(['admin']), async (req, res) => {
  const created = await Medicine.create(req.body);
  res.status(201).json(created);
});

router.patch('/:id/stock', auth(['admin']), async (req, res) => {
  const { stock } = req.body;
  const updated = await Medicine.findByIdAndUpdate(req.params.id, { stock }, { new: true });
  res.json(updated);
});

export default router;
