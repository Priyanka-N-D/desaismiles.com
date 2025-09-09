import express from 'express';
import Appointment from '../models/Appointment.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const created = await Appointment.create(req.body);
  res.status(201).json(created);
});

router.get('/', auth(['admin']), async (req, res) => {
  const list = await Appointment.find().sort({ createdAt: -1 });
  res.json(list);
});

router.patch('/:id/status', auth(['admin']), async (req, res) => {
  const { status } = req.body;
  const updated = await Appointment.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(updated);
});

export default router;
