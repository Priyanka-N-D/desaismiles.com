import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); onLogin(email, password); }}>
        <div className="form-group">
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="btn" type="submit">Login</button>
        <p style={{marginTop: '1rem', color: '#666'}}>Admin: admin@desai.com / admin123<br/>Patient: patient@demo.com / patient123</p>
      </form>
    </div>
  );
}
