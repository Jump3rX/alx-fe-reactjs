import React from "react";
import useRecipeStore from "./recipeStore";
function SearchBar() {
  const { setSearchTerm, filterRecipes } = useRecipeStore();
  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
          filterRecipes();
        }}
      />
    </div>
  );
}

export default SearchBar;
