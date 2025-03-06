import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import hideIcon from "../assets/hide.png";
import showIcon from "../assets/show.png";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(""); // Clear previous errors

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        { email, password }
      );

      localStorage.setItem("username", res.data.username);
      setIsLoggedIn(true);
      navigate("/home");
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || "Invalid email or password.");
      } else {
        setError("Network error. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            className="input-field"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            aria-label="Toggle password visibility"
          >
            <img
              src={showPassword ? hideIcon : showIcon}
              alt={showPassword ? "Hide Password" : "Show Password"}
              className="password-icon"
            />
          </button>
        </div>

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <p className="register-text">
          New User? <Link to="/register" className="register-link">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
