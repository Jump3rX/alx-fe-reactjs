import React, { useEffect } from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
function RecipeList() {
  const { filteredRecipes, filterRecipes } = useRecipeStore();
  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update search term
    filterRecipes(); // Update filteredRecipes based on new search term
  };

  return (
    <div>
      <h2>Recipes</h2>

      {filteredRecipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title || recipe.name || "Add Recipe title"}</h3>
            <p>{recipe.description || "Add Recipe description"}</p>
            <Link to={`/recipes/${recipe.id}`}>Read more</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default RecipeList;
