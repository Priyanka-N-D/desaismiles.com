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
          Expert care with Dr. Rakesh Desai, Implant Specialist, Indi,
          Vijayapura, Karnataka
        </p>
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
