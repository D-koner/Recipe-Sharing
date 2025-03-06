import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import hideIcon from "../assets/hide.png";
import showIcon from "../assets/show.png";

const Register = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/register`, {
        username,
        email,
        password,
      });

      console.log("Registration Successful:", response.data);
      alert(response.data.message); // Success message
      localStorage.setItem("username", username);
      setIsLoggedIn(true);
      navigate("/home");
    } catch (error) {
      console.error("Registration Error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Registration failed! Try again.");
    }
  };

  return (
    <div className="homepage-container">
      <h2 className="home-title">Register</h2>
      <div className="home-buttons">
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input-field"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img
              src={showPassword ? hideIcon : showIcon}
              alt={showPassword ? "Hide password" : "Show password"}
              className="password-icon"
            />
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleRegister} className="home-btn">Register</button>
        <p className="login-text">
          Already have an account? <Link to="/login" className="login-link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
