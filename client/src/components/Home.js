import { Link } from "react-router-dom";
import Footer from "./Footer";

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

  const testimonials = [
    {
      name: "Priya Sharma",
      img: "/patients/priya.jpg",
      opinion:
        "I was nervous about getting dental implants, but Dr. Desai and his team made the process painless and smooth. My smile looks amazing!",
      treatment: "Dental Implants",
    },
    {
      name: "Rahul Patil",
      img: "/patients/rahul.jpg",
      opinion:
        "The clinic is very clean and modern. I got my braces here and the results are fantastic. Highly recommend Desai Dental Clinic!",
      treatment: "Braces & Aligners",
    },
    {
      name: "Asha Kulkarni",
      img: "/patients/asha.jpg",
      opinion:
        "I had a root canal done and it was completely pain-free. The staff is friendly and caring. Best dental experience ever!",
      treatment: "Root Canal Treatment",
    },
    {
      name: "Vikram Joshi",
      img: "/patients/vikram.jpg",
      opinion:
        "Teeth whitening gave me so much confidence. The doctor explained everything clearly and the results were instant.",
      treatment: "Teeth Whitening",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <img src="/smile.jpg" alt="Smiling Patient" className="hero-bg" />
        {/* Left Section */}
        <div className="hero-left">
          <h1 className="hero-title">Welcome to Desai Dental Clinic</h1>
          <p className="hero-description">
            <span className="doctor-name">Dr. Rakesh Desai</span> <br />
            <span className="doctor-qual">(BDS, MDS – Implantology)</span>
            <br />
            <strong>Specialist:</strong> Dental Implants, Cosmetic Dentistry,
            Braces & Aligners, Root Canal Treatment, Pediatric Dentistry, Teeth
            Whitening, Emergency Dental Care.
          </p>

          <div className="contact-card">
            <div className="contact-row">
              <span className="label">Contact:</span>
              <br />
              <a href="tel:+919876543210" className="contact-link">
                +91-9876543210
              </a>
            </div>

            <div className="contact-row">
              <span className="label email-label">Email:</span>
              <br />
              <a href="mailto:dr.rakesh@desaidental.com" className="email-link">
                dr.rakesh@desaidental.com
              </a>
            </div>

            <div className="info-box">
              <span>Timings:</span>
              <br />
              <span className="highlight">
                Monday–Saturday: 9:00 AM – 7:00 PM
              </span>
              <br />
              <span className="closed">Sunday: Closed</span>
            </div>

            <div className="info-box">
              <span className="clinic-label">Clinic Address:</span>
              <br />
              #123, Main Road, Indi, Vijayapura, Karnataka – 586209
            </div>
          </div>

          <p className="why-choose">
            Why Choose Us?{" "}
            <span className="why-choose-text">
              Modern technology, pain-free treatments, friendly staff, and a
              commitment to your healthy smile.
            </span>
          </p>

          <span className="cta-banner">
            Book your appointment online and experience the best dental care!
          </span>

          <button className="cta-button">
            <Link to="/appointment" className="cta-link">
              Book Appointment
            </Link>
          </button>
        </div>

        {/* Right Section */}
        <div className="hero-right">
          <div className="image-card">
            <img src="/happyPatient.jpg" alt="Happy Patient" />
            <p>Our patients love us!</p>
          </div>
          <div className="image-card">
            <img src="/clinic.jpg" alt="Dental Clinic" />
            <p>Visit our state-of-the-art clinic</p>
          </div>
        </div>
      </div>
      <div className="services-section">
        <h2 className="section-title"> Our Treatments </h2>
        {/* <img src="/tooth.jpeg" alt="Clinic Interior" className="tooth-image" /> */}
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.key} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <Link to={`/services/${s.key}`} className="btn">
                Show Details
              </Link>
            </div>
          ))}
        </div>
      </div>

      <h2 className="section-title">What Our Patients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card">
            <h4 className="testimonial-name">{t.name}</h4>
            <span className="testimonial-treatment">{t.treatment}</span>
            <p className="testimonial-opinion">"{t.opinion}"</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
