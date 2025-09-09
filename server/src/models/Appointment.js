import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  patientName: { type: String, required: true },
  service: { type: String, required: true },
  status: { type: String, enum: ['Pending','Confirmed','Completed'], default: 'Pending' },
  phone: String,
  email: String,
  notes: String
}, { timestamps: true });

export default mongoose.model('Appointment', AppointmentSchema);
