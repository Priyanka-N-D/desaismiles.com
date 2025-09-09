import { Link } from "react-router-dom";

export default function Home({ setActivePage }) {
  const services = [
    {
      key: "implants",
      icon: "🦷",
      title: "Dental Implants",
      desc: "Permanent replacement for missing teeth",
    },
    {
      key: "cleaning",
      icon: "✨",
      title: "Dental Cleaning",
      desc: "Professional teeth cleaning & care",
    },
    {
      key: "braces",
      icon: "😬",
      title: "Braces & Aligners",
      desc: "Straighten your teeth",
    },
    {
      key: "whitening",
      icon: "😁",
      title: "Teeth Whitening",
      desc: "Brighten your smile",
    },
    {
      key: "rct",
      icon: "💉",
      title: "Root Canal Treatment",
      desc: "Save infected teeth with RCT",
    },
  ];

  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to Desai Dental Clinic</h1>

        <p>
          Dr. Rakesh Desai is a renowned Implant Specialist based in Indi,
          Vijayapura, Karnataka. He completed his BDS from Rajiv Gandhi
          University of Health Sciences, Bangalore, and pursued his MDS in
          Implantology at SDM College of Dental Sciences, Shimoga. Dr. Desai
          specializes in dental implants, cosmetic dentistry, and advanced
          restorative procedures. He is committed to providing expert care using
          the latest technology in a patient-friendly environment.
          <br />
          <strong className="contact">Contact:</strong> +91-9876543210
          &nbsp;|&nbsp; <strong className="contact">Email:</strong>{" "}
          dr.rakesh@desaidental.com
        </p>

        <div
          style={{
            display: "inline-flex",
            justifyContent: "space-evenly",
            gap: "32px",
            margin: "24px 0",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src="/happyPatient.jpg"
              alt="Happy Patient"
              style={{
                borderRadius: "8px",
                width: "-webkit-fill-available",
                height: "auto",
              }}
            />
            <p>Our patients love us!</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src="/clinic.jpg"
              alt="Dental Clinic"
              style={{
                borderRadius: "8px",
                width: "-webkit-fill-available",
                height: "auto",
              }}
            />
            <p>Visit our state-of-the-art clinic</p>
          </div>
        </div>
        <button className="cta-button">
          <Link
            to="/appointment"
            style={{ color: "white", textDecoration: "none" }}
          >
            Book Appointment
          </Link>
        </button>
      </div>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.key} className="service-card">
            <span className="service-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <Link to={`/services/${s.key}`} className="btn">
              Show Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
