import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      navigate("/account");

      setEmail("");
      setPassword("");
    }
  }
  return (
    <div className="login-page">
      <h2>
        Signin to your <br /> PopX account
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email Address</label>
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <button
          type="submit"
          disabled={!email || !password}
          className={email && password ? "active-btn" : ""}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
