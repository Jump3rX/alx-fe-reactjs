import React from "react";
import { useState, useEffect } from "react";
import recipeData from "../data.json";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    if (foundRecipe) {
      setRecipe(foundRecipe);
    }
  }, [id]);
  if (!recipe) {
    return (
      <>
        <div className="text-center text-red-500">Recipe not found!</div>
        <Link to="/" className="text-blue-600 mt-2 inline-block">
          ← Back
        </Link>
      </>
    );
  }
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <p className="text-gray-600 mt-2">{recipe.summary}</p>

      <h2 className="text-xl font-semibold mt-6">Ingredients</h2>
      <ul className="list-disc list-inside mt-2">
        {recipe.ingredients.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Instructions</h2>
      <ol className="list-decimal list-inside mt-2 space-y-2">
        {recipe.instructions.map((step, index) => (
          <li key={index} className="text-gray-700">
            {step}
          </li>
        ))}
      </ol>

      <a
        href="/"
        className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Back to Home
      </a>
    </div>
  );
}

export default RecipeDetail;
