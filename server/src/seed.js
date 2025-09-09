import 'dotenv/config';
import { connectDB } from './config/db.js';
import User from './models/User.js';
import Patient from './models/Patient.js';
import Appointment from './models/Appointment.js';
import Treatment from './models/Treatment.js';
import Medicine from './models/Medicine.js';

const run = async () => {
  await connectDB(process.env.MONGO_URI);

  await Promise.all([
    User.deleteMany({}),
    Patient.deleteMany({}),
    Appointment.deleteMany({}),
    Treatment.deleteMany({}),
    Medicine.deleteMany({})
  ]);

  const admin = await User.create({ name: 'Dr. Rakesh Desai', email: 'admin@desai.com', password: 'admin123', role: 'admin' });
  const patientUser = await User.create({ name: 'Priya Sharma', email: 'patient@demo.com', password: 'patient123', role: 'patient' });

  const p1 = await Patient.create({ firstName: 'Priya', lastName: 'Sharma', phone: '9876543210', email: 'patient@demo.com', dob: '1990-05-15', lastVisit: '2024-08-15', user: patientUser._id });
  const p2 = await Patient.create({ firstName: 'Arjun', lastName: 'Patel', phone: '9876543211', email: 'arjun@email.com', dob: '1985-12-10', lastVisit: '2024-08-20' });

  await Appointment.insertMany([
    { date: '2024-09-05', time: '10:00', patientName: 'Priya Sharma', service: 'Dental Cleaning', status: 'Confirmed', phone: '9876543210' },
    { date: '2024-09-06', time: '14:00', patientName: 'Arjun Patel', service: 'Implant Consultation', status: 'Pending', phone: '9876543211' }
  ]);

  await Treatment.insertMany([
    { date: '2024-08-15', patientName: 'Priya Sharma', treatment: 'Dental Cleaning', cost: 2000, notes: 'Regular cleaning completed.' },
    { date: '2024-08-20', patientName: 'Arjun Patel', treatment: 'Root Canal Treatment', cost: 5000, notes: 'Follow-up needed.' }
  ]);

  await Medicine.insertMany([
    { name: 'Amoxicillin', dosage: '500mg', stock: 50, instructions: 'Take three times daily after meals for 7 days' },
    { name: 'Ibuprofen', dosage: '400mg', stock: 100, instructions: 'Twice daily for pain relief. Max 3 days.' },
    { name: 'Chlorhexidine Mouthwash', dosage: '0.2%', stock: 25, instructions: 'Rinse twice daily for 30 seconds.' }
  ]);

  console.log('✅ Seed complete');
  process.exit(0);
};

run();
