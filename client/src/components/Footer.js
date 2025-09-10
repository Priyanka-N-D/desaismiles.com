import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #e3e6ff 0%, #f3e8ff 100%)",
        color: "#2c5aa0",
        padding: "32px 0 16px 0",
        fontFamily: "cursive",
        boxShadow: "0 -2px 12px rgba(44,90,160,0.08)",
        marginTop: "48px",
      }}
    >
      <div
        style={{
          maxWidth: "-webkit-fill-available",
          margin: "10px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        {/* Logo & Clinic Info */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <img
            src="/logo.png"
            alt="Desai Dental Clinic Logo"
            style={{
              borderRadius: "100px",
              background: "#fff",
            }}
          />
          <div>
            <div
              style={{
                fontWeight: "900",
                fontSize: "1.35rem",
                color: "#7f53ac",
                letterSpacing: "2px",
              }}
            >
              Desai Dental Clinic
            </div>
            <div
              style={{ fontSize: "1rem", color: "#647dee", fontWeight: "500" }}
            >
              #123, Main Road, Indi, Vijayapura, Karnataka – 586209
            </div>
            <div style={{ fontSize: "0.98rem", marginTop: "2px" }}>
              <span style={{ color: "#2c5aa0", fontWeight: "bold" }}>
                Contact:
              </span>{" "}
              <a
                href="tel:+919876543210"
                style={{
                  color: "#7f53ac",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                +91-9876543210
              </a>
            </div>
            <div style={{ fontSize: "0.98rem" }}>
              <span style={{ color: "#2c5aa0", fontWeight: "bold" }}>
                Email:
              </span>{" "}
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
          </div>
        </div>
        {/* Quick Links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            minWidth: "160px",
          }}
        >
          <Link
            to="/appointment"
            style={{
              color: "#7f53ac",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Book Appointment
          </Link>
          <Link
            to="/services"
            style={{ color: "#2c5aa0", textDecoration: "none" }}
          >
            Treatments
          </Link>
          <Link
            to="/about"
            style={{ color: "#2c5aa0", textDecoration: "none" }}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            style={{ color: "#2c5aa0", textDecoration: "none" }}
          >
            Contact Us
          </Link>
        </div>
      </div>
      {/* Copyright & Policy */}
      <div
        style={{
          textAlign: "center",
          marginTop: "18px",
          color: "#7f53ac",
          fontSize: "0.98rem",
          borderTop: "1px solid #e3e6ff",
          paddingTop: "8px",
        }}
      >
        &copy; {new Date().getFullYear()} Desai Dental Clinic &nbsp;|&nbsp;
        <Link
          to="/privacy"
          style={{ color: "#647dee", textDecoration: "none" }}
        >
          Privacy Policy
        </Link>
        &nbsp;|&nbsp;
        <Link to="/terms" style={{ color: "#647dee", textDecoration: "none" }}>
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
