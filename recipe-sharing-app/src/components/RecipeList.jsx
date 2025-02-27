import React from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";
function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title || "Add Recipe title"}</h3>
          <p>{recipe.description || "Add Recipe description"}</p>
          <Link to={`/recipes/${recipe.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
