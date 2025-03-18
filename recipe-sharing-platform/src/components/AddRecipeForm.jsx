import React, { useState } from "react";

function AddRecipeForm() {
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    ingredients: "",
    preparation_steps: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  }

  function validateForm() {
    let errors = {};
    if (!newRecipe.title.trim()) errors.title = "Title is required";
    if (!newRecipe.ingredients.trim())
      errors.ingredients = "Ingredients are required";
    if (!newRecipe.preparation_steps.trim())
      errors.preparation_steps = "Steps are required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      console.log("Recipe added:", newRecipe);
      setNewRecipe({ title: "", ingredients: "", preparation_steps: "" });
    }
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={newRecipe.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Ingredients</label>
          <textarea
            name="ingredients"
            value={newRecipe.ingredients}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border rounded-md"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Preparation Steps</label>
          <textarea
            name="preparation_steps"
            value={newRecipe.preparation_steps}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded-md"
          />
          {errors.preparation_steps && (
            <p className="text-red-500 text-sm">{errors.preparation_steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
