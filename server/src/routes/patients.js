import express from 'express';
import Patient from '../models/Patient.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth(['admin']), async (req, res) => {
  const list = await Patient.find().sort({ createdAt: -1 });
  res.json(list);
});

router.post('/', auth(['admin']), async (req, res) => {
  const created = await Patient.create(req.body);
  res.status(201).json(created);
});

router.put('/:id', auth(['admin']), async (req, res) => {
  const updated = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', auth(['admin']), async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

export default router;
