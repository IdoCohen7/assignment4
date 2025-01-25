import React, { createContext, useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
    {
      id: uuidv4(),
      name: "Spaghetti Bolognese",
      ingredients: [
        "Spaghetti",
        "Tomato Sauce",
        "Minced Meat",
        "Onion",
        "Garlic",
      ],
      instructions:
        "Cook pasta. Prepare sauce with onion, garlic, and minced meat. Mix and serve.",
    },
    {
      id: uuidv4(),
      name: "Pancakes",
      ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Baking Powder"],
      instructions: "Mix all ingredients and fry in a pan until golden brown.",
    },
    {
      id: uuidv4(),
      name: "Chicken Curry",
      ingredients: [
        "Chicken",
        "Coconut Milk",
        "Curry Powder",
        "Onion",
        "Garlic",
      ],
      instructions:
        "Cook chicken with onions and garlic, add coconut milk and curry powder, simmer for 20 minutes.",
    },
  ]);

  // פונקציה להוספת מתכון חדש
  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
    console.log(recipes);
  };

  // פונקציה לעדכון מתכון קיים
  const updateRecipe = (updatedRecipe) => {
    setRecipes(
      recipes.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r))
    );
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, updateRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
