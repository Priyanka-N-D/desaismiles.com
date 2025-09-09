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

  if (!service) {
    return (
      <div className="container">
        <h2>Service Not Found</h2>
        <button className="btn" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>
        <strong>{service.title}</strong>
      </h2>
      <p>{service.details}</p>
      <p>
        <strong>Duration:</strong> {service.duration}
      </p>
      <p>
        <strong>Causes:</strong> {service.causes}
      </p>
      <p>
        <strong>Why it's needed:</strong> {service.why}
      </p>
      <p>
        <strong>Treatment Process:</strong> {service.treatments}
      </p>

      <p>
        <strong>Cost:</strong> {service.price}
      </p>

      <button className="btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
    </div>
  );
}
