import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  dob: Date,
  lastVisit: String
}, { timestamps: true });

export default mongoose.model('Patient', PatientSchema);
