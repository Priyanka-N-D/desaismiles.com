import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.js";
import patientRoutes from "./routes/patients.js";
import appointmentRoutes from "./routes/appointments.js";
import treatmentRoutes from "./routes/treatments.js";
import medicineRoutes from "./routes/medicines.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => res.send({ ok: true, name: "Desai Dental API" }));

app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/treatments", treatmentRoutes);
app.use("/api/medicines", medicineRoutes);

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  const port = process.env.PORT || 5000;
  app.listen(port, () =>
    console.log(`✅ API running on http://localhost:${port}`)
  );
};

start();
