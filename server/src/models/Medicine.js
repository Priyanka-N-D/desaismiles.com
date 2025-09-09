import mongoose from 'mongoose';

const MedicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dosage: String,
  stock: { type: Number, default: 0 },
  instructions: String
}, { timestamps: true });

export default mongoose.model('Medicine', MedicineSchema);
