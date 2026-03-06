import React, { useState } from "react";
import "./register.css";
import { Navigate, useNavigate } from "react-router-dom";
const Register = () => {
  const [user, setUser] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "",
  });
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const allFieldsValid = Object.values(user).every((value) => value !== "");
    if (allFieldsValid) {
      navigate("/account");
    }
  }
  const isValid = Object.values(user).every((value) => value !== "");

  return (
    <div className="register-page">
      <h2>
        Create your <br /> PopX account
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            placeholder="Enter your full name"
            value={user.fullName}
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
          />
          <label>
            Full Name <span id="star">*</span>
          </label>
        </div>
        <div className="input-field">
          <input
            type="tel"
            placeholder="Enter phone number"
            value={user.phoneNumber}
            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
          />
          <label>
            Phone number <span id="star">*</span>
          </label>
        </div>
        <div className="input-field">
          <input
            type="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label>
            Email Address <span id="star">*</span>
          </label>
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <label>
            Password <span id="star">*</span>
          </label>
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Enter your company"
            value={user.companyName}
            onChange={(e) => setUser({ ...user, companyName: e.target.value })}
          />
          <label>
            Company name <span id="star">*</span>
          </label>
        </div>
        <div className="radio-container">
          <label id="radio-heading">
            Are you an Agency ? <label id="star">*</label>
          </label>
          <div>
            <label id="radio-text" htmlFor="yes">
              Yes
            </label>
            <input
              type="radio"
              id="yes"
              name="agency"
              value="yes"
              checked={user.isAgency === "yes"}
              onChange={(e) => setUser({ ...user, isAgency: e.target.value })}
            />

            <label id="radio-text" htmlFor="no">
              No
            </label>
            <input
              type="radio"
              id="no"
              name="agency"
              value="no"
              checked={user.isAgency === "no"}
              onChange={(e) => setUser({ ...user, isAgency: e.target.value })}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className={isValid ? "active-btn" : ""}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
