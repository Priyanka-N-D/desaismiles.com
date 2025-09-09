import { Link } from "react-router-dom";

export default function Header({ user, logout }) {
  return (
    <nav className="navbar">
      <h2 className="logo">Desai Dental Clinic</h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        {!user && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {user?.role === "admin" && (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        )}
        {user?.role === "patient" && (
          <li>
            <Link to="/patient">Dashboard</Link>
          </li>
        )}
        {user && (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        )}
        <li>
          <Link
            to="/appointment"
            className="cta-nav-btn"
            style={{
              background: "linear-gradient(90deg, #7f53ac 0%, #647dee 100%)",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "transform 0.2s",
              marginLeft: "8px",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.08)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Book Appointment
          </Link>
        </li>
      </ul>
    </nav>
  );
}
