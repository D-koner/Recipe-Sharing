import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      {/* Home Page Title */}
      <h1 className="home-title">Welcome to Recipe Sharing Platform</h1>

      {/* Buttons Section */}
      <div className="home-buttons">
        <button onClick={() => navigate("/create-recipe")} className="home-btn">
          Create Recipe
        </button>
        <button onClick={() => navigate("/saved-recipes")} className="home-btn">
          Saved Recipes
        </button>
      </div>
    </div>
  );
};

export default Home;
