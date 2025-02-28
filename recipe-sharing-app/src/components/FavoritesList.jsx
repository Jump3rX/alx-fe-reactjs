import React from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";
function FavoritesList() {
  const { favorites, recipes, removeFavorite } = useRecipeStore();
  const favoriteRecipes = favorites.map((id) =>
    recipes.find((recipe) => recipe.id === id)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title || "Untitled"}</h3>
            <p>{recipe.description || "No description"}</p>
            <Link to={`/recipes/${recipe.id}`}>Read more</Link>
            <button
              onClick={() => removeFavorite(recipe.id)}
              style={{ marginLeft: "1rem" }}
            >
              Remove from Favorites
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default FavoritesList;
