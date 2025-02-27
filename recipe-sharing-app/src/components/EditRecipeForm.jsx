import React from "react";
import useRecipeStore from "./recipeStore";
import { useState } from "react";

function EditRecipeForm({ recipe }) {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [formData, setFormData] = useState({
    title: recipe.title || "",
    description: recipe.description || "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipe.id, { ...formData });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Edit Recipe</h2>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditRecipeForm;
