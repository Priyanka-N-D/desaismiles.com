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

  return (
    <div className="container">
      <div
        className="hero"
        style={{
          position: "relative",
          minHeight: "340px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2.5rem 1.5rem",
          overflow: "hidden",
          marginBottom: "32px",
          boxShadow: "0 4px 32px rgba(44,90,160,0.10)",
          background: "linear-gradient(120deg, #e3e6ff 0%, #f3e8ff 100%)",
        }}
      >
        {/* Background image overlay */}
        <img
          src="/smile.jpg"
          alt="Smile Background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.18,
            zIndex: 0,
            filter: "blur(2px) brightness(0.9)",
          }}
        />

        {/* Left: About Dr. */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            flex: "1 1 0",
            maxWidth: "-webkit-fill-available",
            borderRadius: "14px",
            padding: "1.5rem",
            boxShadow: "0 2px 12px rgba(44,90,160,0.08)",
            marginRight: "32px",
          }}
        >
          <h1
            style={{
              color: "#2c5aa0",
              fontSize: "3rem",
              fontWeight: "900",
              textShadow: "0 2px 12px #fff, 0 0 8px #b98fe4",
              marginBottom: "1rem",
              letterSpacing: "1px",
              fontFamily: "serif",
            }}
          >
            Welcome to Desai Dental Clinic
          </h1>
          <p
            style={{
              color: "#2c5aa0",
              fontSize: "1.08rem",
              fontWeight: "500",
              marginBottom: "1.2rem",
              lineHeight: "1.7",
            }}
          >
            <p
              style={{
                color: "#2c5aa0",
                fontSize: "1.08rem",
                fontWeight: "500",
                marginBottom: "1.2rem",
                lineHeight: "1.7",
              }}
            >
              <span
                style={{
                  fontSize: "1.18rem",
                  fontWeight: "bold",
                  color: "#7f53ac",
                }}
              >
                Dr. Rakesh Desai
              </span>{" "}
              <span style={{ color: "#647dee", fontWeight: "bold" }}>
                (BDS, MDS – Implantology)
              </span>
              <br />
              <span>
                <strong style={{ color: "#2c5aa0" }}>Specialist:</strong> Dental
                Implants, Cosmetic Dentistry, Braces & Aligners, Root Canal
                Treatment, Pediatric Dentistry, Teeth Whitening, Emergency
                Dental Care.
              </span>
              <br />
              <div
                style={{
                  margin: "18px 0",
                  padding: "18px 22px",
                  background: "rgba(240,245,255,0.85)",
                  borderRadius: "14px",
                  boxShadow: "0 2px 12px rgba(44,90,160,0.08)",
                  fontSize: "1.08rem",
                  fontWeight: "500",
                  color: "#2c5aa0",
                  lineHeight: "1.7",
                }}
              >
                {/* Contact Details */}
                <div style={{ marginBottom: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#647dee" }}>
                    Contact:
                  </span>
                  <br />
                  <a
                    href="tel:+919876543210"
                    style={{
                      color: "#2c5aa0",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    +91-9876543210
                  </a>
                </div>
                {/* Email Details */}
                <div style={{ marginBottom: "10px" }}>
                  <span style={{ fontWeight: "bold", color: "#7f53ac" }}>
                    Email:
                  </span>
                  <br />
                  <a
                    href="mailto:dr.rakesh@desaidental.com"
                    style={{
                      color: "#647dee",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    dr.rakesh@desaidental.com
                  </a>
                </div>
                {/* Timings */}
                <div
                  style={{
                    background: "rgba(100,125,222,0.09)",
                    borderRadius: "8px",
                    padding: "10px 16px",
                    marginBottom: "10px",
                    boxShadow: "0 2px 8px rgba(100,125,222,0.08)",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "1.08rem",
                    color: "#2c5aa0",
                  }}
                >
                  <span style={{ color: "#2c5aa0" }}>Timings:</span>
                  <br />
                  <span style={{ color: "#647dee" }}>
                    Monday–Saturday: 9:00 AM – 7:00 PM
                  </span>
                  <br />
                  <span style={{ color: "#b98fe4" }}>Sunday: Closed</span>
                </div>
                {/* Clinic Address */}
                <div
                  style={{
                    background: "rgba(100,125,222,0.09)",
                    borderRadius: "8px",
                    padding: "10px 16px",
                    marginBottom: "10px",
                    boxShadow: "0 2px 8px rgba(100,125,222,0.08)",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "1.08rem",
                    color: "#2c5aa0",
                  }}
                >
                  <span style={{ color: "#7f53ac", fontSize: "1.18rem" }}>
                    Clinic Address:
                  </span>
                  <br />
                  #123, Main Road, Indi, Vijayapura, Karnataka – 586209
                </div>
              </div>
              <span
                style={{
                  display: "block",
                  margin: "12px 0",
                  color: "#7f53ac",
                  fontWeight: "bold",
                  fontSize: "1.08rem",
                }}
              >
                Why Choose Us?{" "}
                <span style={{ color: "#2c5aa0" }}>
                  Modern technology, pain-free treatments, friendly staff, and a
                  commitment to your healthy smile.
                </span>
              </span>
              <span
                style={{
                  color: "#fff",
                  background:
                    "linear-gradient(90deg, #7f53ac 0%, #647dee 100%)",
                  fontWeight: "bold",
                  borderRadius: "14px",
                  padding: "12px 28px",
                  display: "block",
                  textAlign: "center",
                  fontSize: "1.18rem",
                  letterSpacing: "1px",
                  boxShadow: "0 4px 16px rgba(100,125,222,0.18)",
                  margin: "18px auto 0 auto",
                  textShadow: "0 2px 8px #b98fe4, 0 0 2px #fff",
                }}
              >
                Book your appointment online and experience the best dental
                care!
              </span>
            </p>
          </p>
          <button className="cta-button" style={{ marginTop: "8px" }}>
            <Link
              to="/appointment"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Book Appointment
            </Link>
          </button>
        </div>

        {/* Right: Images */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            minWidth: "220px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src="/happyPatient.jpg"
              alt="Happy Patient"
              style={{
                borderRadius: "12px",

                boxShadow: "0 2px 12px rgba(44,90,160,0.10)",
              }}
            />
            <p
              style={{ color: "#2c5aa0", fontWeight: "bold", marginTop: "8px" }}
            >
              Our patients love us!
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src="/clinic.jpg"
              alt="Dental Clinic"
              style={{
                borderRadius: "12px",

                boxShadow: "0 2px 12px rgba(44,90,160,0.10)",
              }}
            />
            <p
              style={{ color: "#2c5aa0", fontWeight: "bold", marginTop: "8px" }}
            >
              Visit our state-of-the-art clinic
            </p>
          </div>
        </div>
      </div>

      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          color: "white",
        }}
      >
        Our Treatments
      </h2>
      <div
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "32px",
          marginBottom: "48px",
          padding: "12px",
        }}
      >
        {services.map((s) => (
          <div
            key={s.key}
            className="service-card"
            style={{
              background: "linear-gradient(120deg, #f3e8ff 0%, #e3e6ff 100%)",
              borderRadius: "16px",
              boxShadow: "0 4px 24px rgba(100,125,222,0.10)",
              padding: "28px 18px",
              textAlign: "center",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(100,125,222,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 4px 24px rgba(100,125,222,0.10)";
            }}
          >
            <span
              className="service-icon"
              style={{
                fontSize: "2.5rem",
                marginBottom: "12px",
                display: "block",
              }}
            >
              {s.icon}
            </span>
            <h3
              style={{
                color: "#7f53ac",
                fontWeight: "700",
                fontSize: "1.25rem",
                marginBottom: "8px",
                letterSpacing: "1px",
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                color: "#2c5aa0",
                fontSize: "1rem",
                marginBottom: "18px",
              }}
            >
              {s.desc}
            </p>
            <Link
              to={`/services/${s.key}`}
              className="btn"
              style={{
                background: "linear-gradient(90deg, #7f53ac 0%, #647dee 100%)",
                color: "#fff",
                borderRadius: "8px",
                padding: "8px 18px",
                fontWeight: "bold",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(100,125,222,0.15)",
                transition: "background 0.2s",
              }}
            >
              Show Details
            </Link>
          </div>
        ))}
      </div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          color: "white",
          marginBottom: "24px",
          marginTop: "12px",
        }}
      >
        What Our Patients Say
      </h2>
      <div
        className="testimonials-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "32px",
          marginBottom: "48px",
          padding: "12px",
        }}
      >
        {[
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
        ].map((t, idx) => (
          <div
            key={idx}
            className="testimonial-card"
            style={{
              background: "linear-gradient(120deg, #e3e6ff 0%, #f3e8ff 100%)",
              borderRadius: "16px",
              boxShadow: "0 4px 24px rgba(100,125,222,0.10)",
              padding: "24px 18px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h4
              style={{
                color: "#7f53ac",
                fontWeight: "700",
                fontSize: "1.15rem",
                marginBottom: "6px",
              }}
            >
              {t.name}
            </h4>
            <span
              style={{
                color: "#647dee",
                fontWeight: "bold",
                fontSize: "0.98rem",
                marginBottom: "10px",
              }}
            >
              {t.treatment}
            </span>
            <p
              style={{
                color: "#2c5aa0",
                fontSize: "1rem",
                marginBottom: "0",
                fontStyle: "italic",
              }}
            >
              "{t.opinion}"
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
