import React from "react";
import { AiFillClockCircle } from "react-icons/ai"; // Import clock icon from React Icons
import { FiUsers } from "react-icons/fi"; // Import users icon from React Icons
import { FaPlateWheat } from "react-icons/fa6";

const RecipeDetails = ({ recipe }) => {
  console.log(recipe);

  // Extract ingredients and steps from the recipe object
  const { title, image, ingredients, time, description, veg, servings } =
    recipe;

  // Render ingredients
  const renderIngredients = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  // Render steps
  const renderSteps = description.steps.map((step) => (
    <li key={step._id} className="procedure">
      <span>{step.step_number}</span>
      <p>{step.description}</p>
    </li>
  ));

  return (
    <div className="detailedView">
      <div className="recipe-details">
        <div className="header">
          
          <h2 className="title">{title}</h2>
          {veg ? (
            <span className="veg">veg</span>
          ) : (
            <span className="nonVeg">non-veg</span>
          )}
          
        </div>
        <p className="start">{description.text}</p>
        <div className="img">
          <img src={image} alt={title} />
        </div>
        <div className="info-container">
          <p>
            <AiFillClockCircle /> {time} minutes
          </p>
          <p>
            <FiUsers /> {servings} persons
          </p>
          <p>
            <FaPlateWheat /> {ingredients.length} items
          </p>
        </div>
        <h3>Ingredients:</h3>
        <ul className="ingreedients">{renderIngredients}</ul>

        <h3>Steps</h3>
        <ul>{renderSteps}</ul>
      </div>
    </div>
  );
};

export default RecipeDetails;