import { Link } from "react-router-dom";

export default function Header({ user, logout }) {
  return (
    <nav className="navbar">
      <h2 className="logo">Desai Dental Clinic</h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/appointment">Book Appointment</Link>
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
      </ul>
    </nav>
  );
}
