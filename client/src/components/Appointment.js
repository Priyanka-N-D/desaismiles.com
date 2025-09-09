import React, { useState } from 'react';

export default function Appointment({ onCreate }) {
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '', date: '', time: '', service: '', notes: ''
  });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const payload = {
      date: form.date,
      time: form.time,
      patientName: `${form.firstName} ${form.lastName}`.trim(),
      service: form.service,
      status: 'Pending',
      phone: form.phone,
      email: form.email,
      notes: form.notes
    };
    await onCreate(payload);
    setForm({ firstName:'', lastName:'', phone:'', email:'', date:'', time:'', service:'', notes:'' });
  };

  return (
    <div className="form-container">
      <h2>Book Your Appointment</h2>
      <form onSubmit={submit}>
        <div className="grid-2">
          <div className="form-group">
            <label>First Name *</label>
            <input name="firstName" value={form.firstName} onChange={handle} required />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input name="lastName" value={form.lastName} onChange={handle} required />
          </div>
        </div>
        <div className="form-group">
          <label>Phone *</label>
          <input name="phone" value={form.phone} onChange={handle} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handle} />
        </div>
        <div className="grid-2">
          <div className="form-group">
            <label>Date *</label>
            <input name="date" type="date" value={form.date} onChange={handle} required />
          </div>
          <div className="form-group">
            <label>Time *</label>
            <select name="time" value={form.time} onChange={handle} required>
              <option value="">Select Time</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Service *</label>
          <select name="service" value={form.service} onChange={handle} required>
            <option value="">Select Service</option>
            <option value="consultation">General Consultation</option>
            <option value="cleaning">Dental Cleaning</option>
            <option value="implant">Dental Implant</option>
            <option value="cosmetic">Cosmetic Treatment</option>
            <option value="emergency">Emergency Care</option>
            <option value="pediatric">Pediatric Care</option>
          </select>
        </div>
        <div className="form-group">
          <label>Notes</label>
          <textarea name="notes" rows="3" value={form.notes} onChange={handle} />
        </div>
        <button className="btn" type="submit">Book Appointment</button>
      </form>
    </div>
  );
}
