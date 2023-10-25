import React, { useState } from "react";

const CaserolePage = () => {
    // state to hold the list of recipes
    const [recipes, setRecipes] = useState([]); 
    // states to hold the values of the input fields for a new recipe
    const [recipeTitle, setRecipeTitle] = useState(''); 
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeInstructions, setRecipeInstructions] = useState('');
    const [editingRecipe, setEditingRecipe] = useState(null);
    

    // winning casserole recipe
    const winningCasseroleRecipes = [
        {
            id: 1, 
            title: "Jessica's Corn Casserole", 
            image: "/casserole land.jpg", 
            description: "A creamy and delicious casserole that's perfect for any occasion.", 
            ingredients: ["Chicken", "Canned Sweet Corn", "Rice", "Mushroom Soup", "Cheese"], 
            instructions: "Mix all ingredients and bake at 350 for one hour."
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
        // clear input fields
        setRecipeTitle('');
        setRecipeIngredients('');
        setRecipeInstructions('');
    };
    // function to handle updating an existing recipe
    const handleUpdateRecipe = (id) => {
        const updatedRecipes = recipes.map(recipe => {
            if (recipe.id === id ) {
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
        setEditingRecipe(null); // reset editing state
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
        <div>
            <h1>Winning Casserole Recipe 2023</h1>
            {/* display winning casserole recipe */}
            {winningCasseroleRecipes.map(winningRecipe => (
                <div key={winningRecipe.id}>
                    <h2>{winningRecipe.title}</h2>
                    <img src={winningRecipe.image} alt={winningRecipe.title} />
                    <p>{winningRecipe.description}</p>
                    <p><strong>Ingredients:</strong> {winningRecipe.ingredients.join(", ")}</p>
                    <p><strong>Instructions:</strong> {winningRecipe.instructions}</p>
                </div>
            ))}
            <h2>Add your Casserole Recipe</h2>
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
                <button onClick={handleAddRecipe} style={{ marginRight: '20px'}}>Add Recipe</button>
                {/* button to update the recipe */}
                <button onClick={() => handleUpdateRecipe(editingRecipe)} >Update Recipe</button>
              
            
                {recipes.map(recipe => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                        <p><strong>Instructions:</strong> {recipe.instructions}</p>
                        <button onClick={() => handleDeleteRecipe(recipe.id)} style={{ marginRight: '20px'}}>Delete</button>
                        <button onClick={() => {
                            setEditingRecipe(recipe.id);
                            setRecipeTitle(recipe.title);
                            setRecipeIngredients(recipe.ingredients);
                            setRecipeInstructions(recipe.instructions);
                        }}>
                            Update
                        </button>
                    </div>

                ))}
            </div>

    
    );
};

export default CaserolePage;