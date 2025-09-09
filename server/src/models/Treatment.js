import mongoose from 'mongoose';

const TreatmentSchema = new mongoose.Schema({
  date: { type: String, required: true },
  patientName: { type: String, required: true },
  treatment: { type: String, required: true },
  cost: { type: Number, required: true },
  notes: String
}, { timestamps: true });

export default mongoose.model('Treatment', TreatmentSchema);
