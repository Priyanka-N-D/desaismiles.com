import React, { useState } from 'react';

export default function AdminDashboard({
  patients, appointments, treatments, medicines,
  addPatient, addTreatment, addMedicine,
  updateAppointmentStatus, updateMedicineStock
}) {
  const [patientForm, setPatientForm] = useState({ firstName: '', lastName: '', phone: '', email: '', dob: '' });
  const [treatmentForm, setTreatmentForm] = useState({ date: '', patientName: '', treatment: '', cost: '', notes: '' });
  const [medicineForm, setMedicineForm] = useState({ name: '', dosage: '', stock: '', instructions: '' });

  return (
    <div>
      <h2>⚕️ Doctor Dashboard - Dr. Rakesh Desai</h2>

      <div className="stats-grid">
        <div className="stat-card"><div className="stat-number">{patients.length}</div><p>Total Patients</p></div>
        <div className="stat-card"><div className="stat-number">{appointments.filter(a=>a.status!=='Completed').length}</div><p>Open Appointments</p></div>
        <div className="stat-card"><div className="stat-number">{treatments.length}</div><p>Treatments Given</p></div>
        <div className="stat-card"><div className="stat-number">{medicines.length}</div><p>Medicines</p></div>
      </div>

      <section className="admin-section">
        <h3>Patients</h3>
        <form className="inline-form" onSubmit={(e)=>{e.preventDefault(); addPatient(patientForm); setPatientForm({ firstName:'', lastName:'', phone:'', email:'', dob:'' });}}>
          <input placeholder="First" value={patientForm.firstName} onChange={e=>setPatientForm({...patientForm, firstName:e.target.value})} required />
          <input placeholder="Last" value={patientForm.lastName} onChange={e=>setPatientForm({...patientForm, lastName:e.target.value})} required />
          <input placeholder="Phone" value={patientForm.phone} onChange={e=>setPatientForm({...patientForm, phone:e.target.value})} required />
          <input placeholder="Email" value={patientForm.email} onChange={e=>setPatientForm({...patientForm, email:e.target.value})} />
          <input type="date" value={patientForm.dob} onChange={e=>setPatientForm({...patientForm, dob:e.target.value})} />
          <button className="btn" type="submit">Add</button>
        </form>
        <div className="table-container">
          <table>
            <thead><tr><th>Name</th><th>Phone</th><th>Email</th><th>Last Visit</th></tr></thead>
            <tbody>
              {patients.map(p=> (
                <tr key={p._id}><td>{p.firstName} {p.lastName}</td><td>{p.phone}</td><td>{p.email || 'N/A'}</td><td>{p.lastVisit || '-'}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="admin-section">
        <h3>Appointments</h3>
        <div className="table-container">
          <table>
            <thead><tr><th>Date</th><th>Time</th><th>Patient</th><th>Service</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {appointments.map(a => (
                <tr key={a._id}>
                  <td>{a.date}</td><td>{a.time}</td><td>{a.patientName}</td><td>{a.service}</td>
                  <td>{a.status}</td>
                  <td>
                    {a.status !== 'Confirmed' && <button className="btn" onClick={()=>updateAppointmentStatus(a._id, 'Confirmed')}>Confirm</button>}
                    {a.status === 'Confirmed' && <button className="btn" onClick={()=>updateAppointmentStatus(a._1d, 'Completed')}>Complete</button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="admin-section">
        <h3>Treatment History</h3>
        <form className="inline-form" onSubmit={(e)=>{e.preventDefault(); addTreatment({...treatmentForm, cost: Number(treatmentForm.cost)}); setTreatmentForm({ date:'', patientName:'', treatment:'', cost:'', notes:'' });}}>
          <input type="date" value={treatmentForm.date} onChange={e=>setTreatmentForm({...treatmentForm, date:e.target.value})} required />
          <input placeholder="Patient Name" value={treatmentForm.patientName} onChange={e=>setTreatmentForm({...treatmentForm, patientName:e.target.value})} required />
          <input placeholder="Treatment" value={treatmentForm.treatment} onChange={e=>setTreatmentForm({...treatmentForm, treatment:e.target.value})} required />
          <input type="number" placeholder="Cost" value={treatmentForm.cost} onChange={e=>setTreatmentForm({...treatmentForm, cost:e.target.value})} required />
          <input placeholder="Notes" value={treatmentForm.notes} onChange={e=>setTreatmentForm({...treatmentForm, notes:e.target.value})} />
          <button className="btn" type="submit">Add</button>
        </form>
        <div className="table-container">
          <table>
            <thead><tr><th>Date</th><th>Patient</th><th>Treatment</th><th>Cost</th><th>Notes</th></tr></thead>
            <tbody>
              {treatments.map(t => (
                <tr key={t._id}><td>{t.date}</td><td>{t.patientName}</td><td>{t.treatment}</td><td>₹{t.cost}</td><td>{t.notes || '—'}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="admin-section">
        <h3>Medicine Inventory</h3>
        <form className="inline-form" onSubmit={(e)=>{e.preventDefault(); addMedicine({...medicineForm, stock:Number(medicineForm.stock || 0)}); setMedicineForm({ name:'', dosage:'', stock:'', instructions:'' });}}>
          <input placeholder="Name" value={medicineForm.name} onChange={e=>setMedicineForm({...medicineForm, name:e.target.value})} required />
          <input placeholder="Dosage" value={medicineForm.dosage} onChange={e=>setMedicineForm({...medicineForm, dosage:e.target.value})} required />
          <input type="number" placeholder="Stock" value={medicineForm.stock} onChange={e=>setMedicineForm({...medicineForm, stock:e.target.value})} required />
          <input placeholder="Instructions" value={medicineForm.instructions} onChange={e=>setMedicineForm({...medicineForm, instructions:e.target.value})} />
          <button className="btn" type="submit">Add</button>
        </form>
        <div className="table-container">
          <table>
            <thead><tr><th>Medicine</th><th>Dosage</th><th>Stock</th><th>Instructions</th><th>Actions</th></tr></thead>
            <tbody>
              {medicines.map(m => (
                <tr key={m._id}>
                  <td>{m.name}</td><td>{m.dosage}</td><td>{m.stock}</td><td>{m.instructions}</td>
                  <td>
                    <button className="btn" onClick={()=>{
                      const s = prompt(`Update stock for ${m.name}`, m.stock);
                      if (s !== null) updateMedicineStock(m._id, Number(s));
                    }}>Update Stock</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
