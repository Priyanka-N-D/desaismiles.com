import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ServiceDetails() {
  const { id } = useParams(); // gets /services/:id
  const navigate = useNavigate();

  // Define all treatments here (later can be fetched from backend)
  const services = {
    implants: {
      title: "Dental Implants",
      details:
        "Dental implants are artificial tooth roots placed into your jawbone to support replacement teeth. Provides durability, natural look, and comfort.",
      duration: "2-6 months (includes healing time)",
      causes: "Missing teeth due to injury, decay, or gum disease.",
      why: "Implants restore chewing ability, prevent bone loss, and improve appearance.",
      treatments:
        "Surgical placement of titanium post, followed by crown attachment after healing.",
      price: "₹25,000",
    },
    cleaning: {
      title: "Dental Cleaning",
      details:
        "Professional cleaning removes plaque and tartar buildup, keeping gums healthy and breath fresh.",
      duration: "30-45 minutes",
      causes: "Plaque and tartar accumulation due to poor oral hygiene.",
      why: "Prevents gum disease, cavities, and bad breath.",
      treatments: "Scaling and polishing by dental hygienist.",
      price: "₹1,500",
    },
    braces: {
      title: "Braces & Aligners",
      details:
        "Teeth straightening using metal/ceramic braces or clear aligners for a confident smile.",
      duration: "12-24 months",
      causes: "Crooked, crowded, or misaligned teeth; bite issues.",
      why: "Improves bite, oral health, and aesthetics.",
      treatments:
        "Fixed braces or removable aligners with regular adjustments.",
      price: "₹15,000 onwards",
    },
    whitening: {
      title: "Teeth Whitening",
      details:
        "Safe bleaching procedures that brighten your teeth and enhance your smile.",
      duration: "45-60 minutes (in-clinic); 2 weeks (at-home kits)",
      causes: "Staining from food, drinks, smoking, or aging.",
      why: "Improves appearance and boosts confidence.",
      treatments: "In-office bleaching or custom take-home kits.",
      price: "₹5,000",
    },
    rct: {
      title: "Root Canal Treatment",
      details:
        "Pain-relief procedure to save infected teeth. Microscope-assisted for better results.",
      duration: "1-3 sessions (30-60 minutes each)",
      causes: "Deep decay, cracked tooth, or trauma causing pulp infection.",
      why: "Removes infection, relieves pain, and saves natural tooth.",
      treatments:
        "Cleaning and sealing of root canals, followed by crown placement.",
      price: "₹8,000",
    },
  };

  const service = services[id];

  return (
    <div
      className="container"
      style={{
        maxWidth: "-webkit-fill-available",
        margin: "0 auto",
        padding: "10px 0",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.3rem",
          fontWeight: "900",
          color: "#fff",

          padding: "18px 0",
          marginBottom: "28px",
          letterSpacing: "2px",
          fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
        }}
      >
        <strong>{service.title}</strong>
      </h2>
      <div
        style={{
          background: "linear-gradient(120deg, #e3e6ff 0%, #f3e8ff 100%)",
          borderRadius: "18px",
          boxShadow: "0 4px 24px rgba(100,125,222,0.13)",
          padding: "32px 28px",
          margin: "32px",
          color: "#2c5aa0",
          fontSize: "1.13rem",
          lineHeight: "1.8",
        }}
      >
        <p
          style={{
            marginBottom: "18px",
            color: "#647dee",
            fontWeight: "700",
            fontSize: "1.15rem",
            letterSpacing: "1px",
          }}
        >
          {service.details}
        </p>
        <div style={{ marginBottom: "12px" }}>
          <span
            style={{
              color: "#7f53ac",
              fontWeight: "bold",
              fontSize: "1.08rem",
              display: "inline-block",
              minWidth: "120px",
            }}
          >
            Duration:
          </span>
          <span style={{ color: "#2c5aa0", fontWeight: "500" }}>
            {service.duration}
          </span>
        </div>
        <div style={{ marginBottom: "12px" }}>
          <span
            style={{
              color: "#7f53ac",
              fontWeight: "bold",
              fontSize: "1.08rem",
              display: "inline-block",
              minWidth: "120px",
            }}
          >
            Causes:
          </span>
          <span style={{ color: "#2c5aa0", fontWeight: "500" }}>
            {service.causes}
          </span>
        </div>
        <div style={{ marginBottom: "12px" }}>
          <span
            style={{
              color: "#7f53ac",
              fontWeight: "bold",
              fontSize: "1.08rem",
              display: "inline-block",
              minWidth: "120px",
            }}
          >
            Why it's needed:
          </span>
          <span style={{ color: "#2c5aa0", fontWeight: "500" }}>
            {service.why}
          </span>
        </div>
        <div style={{ marginBottom: "12px" }}>
          <span
            style={{
              color: "#7f53ac",
              fontWeight: "bold",
              fontSize: "1.08rem",
              display: "inline-block",
              minWidth: "120px",
            }}
          >
            Treatment Process:
          </span>
          <span style={{ color: "#2c5aa0", fontWeight: "500" }}>
            {service.treatments}
          </span>
        </div>
        <div
          style={{
            marginTop: "18px",
            padding: "12px 0",
            background: "linear-gradient(90deg, #7f53ac 0%, #647dee 100%)",
            borderRadius: "10px",
            textAlign: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.18rem",
            boxShadow: "0 2px 8px rgba(100,125,222,0.15)",
          }}
        >
          Cost:{" "}
          <span
            style={{ fontSize: "1.22rem", color: "#fff", fontWeight: "bold" }}
          >
            {service.price}
          </span>
        </div>
      </div>
      <button
        className="btn"
        onClick={() => navigate("/")}
        style={{
          background: "linear-gradient(90deg, #7f53ac 0%, #647dee 100%)",
          color: "#fff",
          borderRadius: "8px",
          padding: "12px 28px",
          fontWeight: "bold",
          fontSize: "1.08rem",
          boxShadow: "0 2px 8px rgba(100,125,222,0.18)",
          border: "none",
          cursor: "pointer",
          margin: "0 auto",
          display: "block",
          letterSpacing: "1px",
          marginTop: "8px",
        }}
      >
        ← Back to Home
      </button>
    </div>
  );
}
