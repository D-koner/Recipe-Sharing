import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, [userID]);

  return (
    <div className="saved-recipes">
      <h1>Saved Recipes</h1>
      {savedRecipes.length === 0 ? (
        <p>No saved recipes yet.</p>
      ) : (
        <ul>
          {savedRecipes.map((recipe) => (
            <li key={recipe._id} className="recipe-card">
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
              {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.name} />}
              <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedRecipes;
