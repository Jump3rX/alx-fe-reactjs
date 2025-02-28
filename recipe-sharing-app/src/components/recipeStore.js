import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) // Changed title to name to match your earlier example
      ),
    })),
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (recipeId, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === recipeId ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
  setRecipes: (recipes) => set({ recipes }),

  // Favorites functionality
  favorites: [], // Array of recipe IDs marked as favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites // Prevent duplicates
        : [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations functionality
  recommendations: [], // Array of recommended recipes
  generateRecommendations: () =>
    set((state) => {
      // Simple logic: Recommend recipes not in favorites, based on partial title match with favorites
      const favoriteRecipes = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id)
      );
      const recommended = state.recipes.filter((recipe) => {
        if (state.favorites.includes(recipe.id)) return false; // Exclude favorites
        return favoriteRecipes.some((fav) =>
          recipe.title
            .toLowerCase()
            .includes(fav.title.toLowerCase().slice(0, 3))
        ); // Match first 3 chars of favorite titles
      });
      return {
        recommendations:
          recommended.length > 0 ? recommended : state.recipes.slice(0, 2),
      }; // Fallback to first 2 recipes
    }),
}));

export default useRecipeStore;
