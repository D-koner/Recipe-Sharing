import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";   
import Contact from "./pages/Contact"; 
import { CreateRecipe } from "./pages/CreateRecipe";
import SavedRecipes from "./pages/SavedRecipes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />   
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-recipe" element={<CreateRecipe />} /> {/* ✅ Create Recipe Route */}
        <Route path="/saved-recipes" element={<SavedRecipes />} /> {/* ✅ Saved Recipes Route */}
      </Routes>
    </Router>
  );
};

export default App;
