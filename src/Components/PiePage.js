import React, { useState } from "react";

const PiePage = () => {
    // state to hold the list of recipes
    const [recipes, setRecipes] = useState([]); 
    // states to hold the valuse of the input fields for a new recipe
    const [recipeTitle, setRecipeTitle] = useState(''); 
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeInstructions, setRecipeInstructions] = useState('');

    // define a constant array of object representing winning pie recipes
    const winningPieRecipes = [
        {
            id: 1, 
            title: "Tammy's Sweet Potato Pie", 
            image: "/sweetpotatopie.jpg", 
            description: "A classic sweet potato pie, passed down for five generations", 
            ingredients: ["Sweet Potatoes", "Sugar", "Cinnamon", "Pie Crust"],
            instructions: "Cook and mash your sweet potatoes, mix with other ingredients and add to pie shell, bake at 350 for an hour"
        }
    ];

    // function to handle the addition of a new recipe
    const handleAddRecipe = () => {
        // make the new recipe
        const newRecipe = {
            id: Date.now(), // unique id for each recipe
            title: recipeTitle, 
            ingredients: recipeIngredients, 
            instructions: recipeInstructions, 
        };
        // add new recipe to the existing recipes array
        setRecipes([...recipes, newRecipe]);
    }
    // function to delete recipe
    const handleDeleteRecipe = (id) => {
        // filter out recipe with specific id 
        const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
        // update the recipes state with the filtered list
        setRecipes(updatedRecipes);
    }
    

    return (
        <div>
            <h1>Winning Pie Recipe 2023</h1>
            {/* display winning pie recipe */}
            {winningPieRecipes.map(winningRecipe => (
                <div key={winningRecipe.id}>
                    <h2>{winningRecipe.title}</h2>
                    <img src={winningRecipe.image} alt={winningRecipe.title} />
                    <p>{winningRecipe.description}</p>
                    <p><strong>Ingredients:</strong> {winningRecipe.ingredients.join(", ")}</p>
                    <p><strong>Instructions:</strong> {winningRecipe.instructions}</p>
                </div>
            ))}

            <h2>Add your Pie Recipe</h2>
            {/* input field for the recipe title */}
            <input
                value={recipeTitle}
                onChange={e => setRecipeTitle(e.target.value)} //update state when input value changes
                placeholder="Recipe Title"
                />
            {/* text area for the ingredients */}
            <textarea
                value={recipeIngredients}
                onChange={e => setRecipeIngredients(e.target.value)}
                placeholder="Ingredients"
                />
            {/* text area for instructions */}
            <textarea
                value={recipeInstructions}
                onChange={e => setRecipeInstructions(e.target.value)}
                placeholder="Instructions"
                />
                {/* button to trigger the addition of new recipe */}
                <button onClick={handleAddRecipe}>Add Recipe</button>
                
            
                {recipes.map(recipe => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                        <p><strong>Instructions:</strong> {recipe.instructions}</p>
                        <button onClick={() => handleDeleteRecipe(recipe.id)}>Delete</button>
                    </div>

                ))}
            </div>

    
    );
}

export default PiePage;