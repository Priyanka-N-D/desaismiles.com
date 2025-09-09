import "./styles.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import api from "./api";
import Header from "./components/Header";
import Home from "./components/Home";
import Appointment from "./components/Appointment";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import PatientDashboard from "./components/PatientDashboard";
import ServiceModal from "./components/ServiceModal";
import ServiceDetails from "./pages/serviceDetails"; // new page

function App() {
  const [activePage, setActivePage] = useState("home");
  const [user, setUser] = useState(null);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const isAdmin = user?.role === "admin";

  // Load admin datasets
  const loadAdminData = async () => {
    if (!isAdmin) return;
    const [p, a, t, m] = await Promise.all([
      api.get("/patients"),
      api.get("/appointments"),
      api.get("/treatments"),
      api.get("/medicines"),
    ]);
    setPatients(p.data);
    setAppointments(a.data);
    setTreatments(t.data);
    setMedicines(m.data);
  };

  useEffect(() => {
    loadAdminData();
  }, [isAdmin]);

  const handleLogin = async (email, password) => {
    console.log("Logging in with", email, password);
    try {
      console.log("Attempting login...");
      const { data } = await api.post("/auth/login", { email, password });
      console.log("Login successful:", data);
      localStorage.setItem("token", data.token);

      setUser(data.user);
      setActivePage(data.user.role === "admin" ? "admin" : "patient");
    } catch (e) {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setActivePage("home");
  };

  const createAppointment = async (payload) => {
    const { data } = await api.post("/appointments", payload);
    alert("Appointment booked!");
    if (isAdmin) setAppointments([data, ...appointments]);
  };

  const addPatient = async (payload) => {
    const { data } = await api.post("/patients", payload);
    setPatients([data, ...patients]);
  };

  const addTreatment = async (payload) => {
    const { data } = await api.post("/treatments", payload);
    setTreatments([data, ...treatments]);
  };

  const addMedicine = async (payload) => {
    const { data } = await api.post("/medicines", payload);
    setMedicines([data, ...medicines]);
  };

  const updateAppointmentStatus = async (id, status) => {
    const { data } = await api.patch(`/appointments/${id}/status`, { status });
    setAppointments(appointments.map((a) => (a._id === id ? data : a)));
  };

  const updateMedicineStock = async (id, stock) => {
    const { data } = await api.patch(`/medicines/${id}/stock`, { stock });
    setMedicines(medicines.map((m) => (m._id === id ? data : m)));
  };

  return (
    <BrowserRouter>
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        user={user}
        logout={logout}
      />

      <main className="container">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home setActivePage={setActivePage} />} />
          <Route
            path="/appointment"
            element={<Appointment onCreate={createAppointment} />}
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          {/* Service details (new feature) */}
          <Route path="/services/:id" element={<ServiceDetails />} />

          {/* Admin / Patient handled via activePage */}
          <Route
            path="/admin"
            element={
              isAdmin ? (
                <AdminDashboard
                  patients={patients}
                  appointments={appointments}
                  treatments={treatments}
                  medicines={medicines}
                  addPatient={addPatient}
                  addTreatment={addTreatment}
                  addMedicine={addMedicine}
                  updateAppointmentStatus={updateAppointmentStatus}
                  updateMedicineStock={updateMedicineStock}
                />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/patient"
            element={
              user?.role === "patient" ? (
                <PatientDashboard />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
