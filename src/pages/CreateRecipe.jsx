import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../styles/CreateRecipe.css";

export const CreateRecipe = () => {
  const userID = useGetUserID();
  const [cookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [""],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });

  // Handle input field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  // Handle ingredient changes
  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const updatedIngredients = [...recipe.ingredients];
    updatedIngredients[index] = value;
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  // Add new ingredient field
  const handleAddIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  // Submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/recipes",
        { ...recipe },
        { headers: { authorization: cookies.access_token } }
      );
      alert("Recipe Created Successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  return (
    <div className="create-recipe">
      <div className="recipe-box">
        <h2 className="recipe-title">Create Recipe</h2>
        
        <form onSubmit={handleSubmit} className="recipe-form">
          {/* Name Input */}
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            className="recipe-input"
            required
          />

          {/* Description Input */}
          <label>Description:</label>
          <textarea
            name="description"
            value={recipe.description}
            onChange={handleChange}
            className="recipe-textarea"
            required
          ></textarea>

          {/* Ingredients Input */}
          <label>Ingredients:</label>
          <div className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <input
                key={index}
                type="text"
                value={ingredient}
                onChange={(event) => handleIngredientChange(event, index)}
                className="recipe-input"
                required
              />
            ))}
          </div>
          <button type="button" onClick={handleAddIngredient} className="add-ingredient-btn">
            + Add Ingredient
          </button>

          {/* Instructions Input */}
          <label>Instructions:</label>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            className="recipe-textarea"
            required
          ></textarea>

          {/* Image URL Input */}
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={recipe.imageUrl}
            onChange={handleChange}
            className="recipe-input"
          />

          {/* Cooking Time Input */}
          <label>Cooking Time (minutes):</label>
          <input
            type="number"
            name="cookingTime"
            value={recipe.cookingTime}
            onChange={handleChange}
            className="recipe-input"
            required
          />

          {/* Submit Button */}
          <button type="submit" className="submit-recipe-btn">
            Create Recipe
          </button>
        </form>
      </div>
    </div>
  );
};
