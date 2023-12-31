import React, { useState } from "react";

const PicklesPage = () => {
    // state to hold the list of recipes
    const [recipes, setRecipes] = useState([]); 
    // states to hold the valuse of the input fields for a new recipe
    const [recipeTitle, setRecipeTitle] = useState(''); 
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeInstructions, setRecipeInstructions] = useState('');
    const [editingRecipe, setEditingRecipe] = useState(null);

    // define a constant array of objects representing winning recipes
    const winningRecipes = [
        {
            id: 1, 
            title: "Martha's Sweet Pickles", 
            image: "/sweetpickles.jpg", 
            description: "Martha's homemade 7 day sweet pickles will brighten up your next picnic!", 
            ingredients: ["Cucumbers", "Sugar", "Vinegar", "Mustard Seed", "Celery Seed"], 
            instructions: "Slice cucmbers thinly, Mix with other ingredients, Refridgerate for 7 days and enjoy!"
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
        setRecipeTitle('');
        setRecipeIngredients('');
        setRecipeInstructions('');
    };

    //function to handle updating an exisitng recipe
    const handleUpdateRecipe = (id) => {
        const updatedRecipes = recipes.map(recipe => {
            if (recipe.id === id) {
                return {
                    ...recipe, 
                    title: recipeTitle,
                    ingredients: recipeIngredients, 
                    instructions: recipeInstructions,
                };
            }
            return recipe;
        });
        setRecipes(updatedRecipes);
        setEditingRecipe(null);
        setRecipeTitle('');
        setRecipeIngredients('');
        setRecipeInstructions('');
    };
    // function to delete recipe
    const handleDeleteRecipe = (id) => {
        // filter out recipe with specific id 
        const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
        // update the recipes state with the filtered list
        setRecipes(updatedRecipes);
    }
    

    return (
        <div className="card mb-4">
            <h1 className="text-dark my-4 text-center">Winning Pickle Recipe 2023</h1>
    
            {/* display the winning recipe */}
            {winningRecipes.map(winningRecipe => (
                <div key={winningRecipe.id}>
                    <h2>{winningRecipe.title}</h2>
                    <img src={winningRecipe.image} alt={winningRecipe.title} />
                    <p>{winningRecipe.description}</p>
                    <p><strong>Ingredients:</strong> {winningRecipe.ingredients.join(", ")}</p>
                    <p><strong>Instructions:</strong> {winningRecipe.instructions}</p>
                </div>
            ))}
    
            {/* Start of the section to add a new recipe */}
            <div>
                <h2 className="text-dark mt-5 my-4 text-center">Add your Pickle Recipe</h2>
                <div className="mb-3">
                {/* input field for the recipe title */}
                <input
                    className="form-control"
                    value={recipeTitle}
                    onChange={e => setRecipeTitle(e.target.value)}
                    placeholder="Recipe Title"
                />
                </div>
                {/* text area for the ingredients */}
                <div className="mb-3">
                <textarea
                    className="form-control"
                    value={recipeIngredients}
                    onChange={e => setRecipeIngredients(e.target.value)}
                    placeholder="Ingredients"
                />
                </div>
                {/* text area for instructions */}
                <div className="mb-3">
                <textarea
                    className="form-control my-2"
                    value={recipeInstructions}
                    onChange={e => setRecipeInstructions(e.target.value)}
                    placeholder="Instructions"
                />
                </div>
                {/* button to trigger the addition of new recipe */}
                <button onClick={handleAddRecipe} className="btn btn-dark my-2 me-3">Add Recipe</button>
                {/* button to update the recipe */}
                <button onClick={() => handleUpdateRecipe(editingRecipe)} className="btn btn-dark my-2 me-3">Update Recipe</button>
    
                {recipes.map(recipe => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                        <p><strong>Instructions:</strong> {recipe.instructions}</p>
                        <button onClick={() => handleDeleteRecipe(recipe.id)} className="btn btn-dark my-2 me-3">Delete</button>
                        <button onClick={() => {
                            setEditingRecipe(recipe.id);
                            setRecipeTitle(recipe.title);
                            setRecipeIngredients(recipe.ingredients);
                            setRecipeInstructions(recipe.instructions);
                            
                        }} className="btn btn-dark my-2 me-3">
                            Update
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
 };

export default PicklesPage;