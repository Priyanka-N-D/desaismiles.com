import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Clinic Info */}
        <div className="footer-info">
          <img
            src="/logo.png"
            alt="Desai Dental Clinic Logo"
            className="footer-logo"
          />
          <div>
            <div className="footer-title">Desai Dental Clinic</div>
            <div className="footer-address">
              #123, Main Road, Indi, Vijayapura, Karnataka – 586209
            </div>
            <div className="footer-contact">
              <span>Contact:</span>{" "}
              <a href="tel:+919876543210">+91-9876543210</a>
            </div>
            <div className="footer-email">
              <span>Email:</span>{" "}
              <a href="mailto:dr.rakesh@desaidental.com">
                dr.rakesh@desaidental.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <Link to="/appointment">Book Appointment</Link>
          <Link to="/services">Treatments</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Desai Dental Clinic &nbsp;|&nbsp;
        <Link to="/privacy">Privacy Policy</Link>
        &nbsp;|&nbsp;
        <Link to="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
}
