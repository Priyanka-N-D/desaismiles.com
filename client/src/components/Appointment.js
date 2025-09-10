import React, { useState } from "react";

export default function Appointment({ onCreate }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const payload = {
      date: form.date,
      time: form.time,
      patientName: `${form.firstName} ${form.lastName}`.trim(),
      service: form.service,
      status: "Pending",
      phone: form.phone,
      email: form.email,
      notes: form.notes,
    };
    await onCreate(payload);
    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      service: "",
      notes: "",
    });
  };

  return (
    <div className="appointment-wrapper">
      <div className="appointment-header">
        <h1>🦷 Book Your Appointment</h1>
        <p>
          Welcome to <strong>Desai Dental Clinic</strong>! Please fill in your
          details below to schedule your visit.
        </p>
      </div>

      <form className="appointment-form" onSubmit={submit}>
        {/* Personal Info */}
        <h2>👤 Personal Information</h2>
        <div className="grid-2">
          <div className="form-group">
            <label>First Name *</label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handle}
              required
              placeholder="Enter your first name"
            />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handle}
              required
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="form-group">
          <label>📞 Phone *</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handle}
            required
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label>📧 Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handle}
            placeholder="Enter your email address"
          />
        </div>

        {/* Appointment Info */}
        <h2>📅 Appointment Details</h2>
        <div className="grid-2">
          <div className="form-group">
            <label>📆 Date *</label>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handle}
              required
            />
          </div>
          <div className="form-group">
            <label>⏰ Time *</label>
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
          <label>🛠️ Service *</label>
          <select
            name="service"
            value={form.service}
            onChange={handle}
            required
          >
            <option value="">Select Service</option>
            <option value="consultation">🩺 General Consultation</option>
            <option value="cleaning">🪥 Dental Cleaning</option>
            <option value="implant">⚙️ Dental Implant</option>
            <option value="cosmetic">✨ Cosmetic Treatment</option>
            <option value="emergency">🚨 Emergency Care</option>
            <option value="pediatric">👶 Pediatric Care</option>
          </select>
        </div>

        <div className="form-group">
          <label>📝 Notes</label>
          <textarea
            name="notes"
            rows="3"
            value={form.notes}
            onChange={handle}
            placeholder="Add any special requests or notes"
          />
        </div>

        <button className="btn-submit" type="submit">
          ✅ Confirm Appointment
        </button>
      </form>
    </div>
  );
}
