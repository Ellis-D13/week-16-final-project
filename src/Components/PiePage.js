import React, { useState } from "react";

const PiePage = () => {
    // state to hold the list of recipes
    const [recipes, setRecipes] = useState([]); 
    // states to hold the valuse of the input fields for a new recipe
    const [recipeTitle, setRecipeTitle] = useState(''); 
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeInstructions, setRecipeInstructions] = useState('');

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