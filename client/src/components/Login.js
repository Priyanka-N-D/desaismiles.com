import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="form-container"
      style={{
        maxWidth: "600px",
        margin: "48px auto",
        padding: "32px 28px",
        background: "linear-gradient(120deg, #e3e6ff 0%, #f3e8ff 100%)",
        borderRadius: "18px",
        boxShadow: "0 4px 24px rgba(100,125,222,0.13)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "18px" }}>
        <h2
          style={{
            color: "#7f53ac",
            fontWeight: "900",
            fontSize: "1.7rem",
            letterSpacing: "2px",
            margin: "0",
            fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
          }}
        >
          Login
        </h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin(email, password);
        }}
      >
        <div className="form-group" style={{ marginBottom: "18px" }}>
          <label style={{ color: "#2c5aa0", fontWeight: "bold" }}>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #b98fe4",
              marginTop: "6px",
              fontSize: "1rem",
              background: "#fff",
              color: "#2c5aa0",
              boxShadow: "0 1px 4px rgba(100,125,222,0.07)",
            }}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group" style={{ marginBottom: "18px" }}>
          <label style={{ color: "#2c5aa0", fontWeight: "bold" }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #b98fe4",
              marginTop: "6px",
              fontSize: "1rem",
              background: "#fff",
              color: "#2c5aa0",
              boxShadow: "0 1px 4px rgba(100,125,222,0.07)",
            }}
            placeholder="Enter your password"
          />
        </div>
        <button
          className="btn"
          type="submit"
          style={{
            width: "100%",
            background: "linear-gradient(90deg, #7f53ac 0%, #647dee 100%)",
            color: "#fff",
            borderRadius: "8px",
            padding: "12px 0",
            fontWeight: "bold",
            fontSize: "1.08rem",
            boxShadow: "0 2px 8px rgba(100,125,222,0.18)",
            border: "none",
            cursor: "pointer",
            letterSpacing: "1px",
            marginTop: "8px",
            marginBottom: "8px",
            transition: "background 0.2s",
          }}
        >
          Login
        </button>
        <p
          style={{
            marginTop: "1rem",
            color: "#7f53ac",
            fontSize: "0.98rem",
            textAlign: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Demo Accounts:</span>
          <br />
          <span style={{ color: "#2c5aa0" }}>Admin:</span> admin@desai.com /
          admin123
          <br />
          <span style={{ color: "#2c5aa0" }}>Patient:</span> patient@demo.com /
          patient123
        </p>
      </form>
    </div>
  );
}
