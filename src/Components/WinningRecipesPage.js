import React from 'react';
import './WinningRecipesPage.css'

// functional component named WinningRecipesPage
function WinningRecipesPage() {
    // defining a constant array of objects representing winning recipes
    const winningRecipes = [
        {
            id: 1, 
            title: "Martha's Sweet Pickles", 
            image: "/sweetpickles.jpg",
            description: "Martha's homemade 7 day sweet pickles will brighten up your next picnic",
            ingredients: ["Cucumbers", "Sugar", "Vinegar", "Mustard Seed", "Celery Seed"],
            instructions: "Slice cucumbers thinly. Mix with other ingredients. Refrigerate for seven days and enjoy!"
        }, 
        {
            id: 2, 
            title: "Tammy's Sweet Potato Pie", 
            image: "/sweetpotatopie.jpg", 
            description: "Tammy's Sweet Potato pie recipe was passed down for 5 generations and swept the competition and now you can make it at home too!",
            ingredients: ["Sweet Potatoes", "Sugar", "Butter", "Milk", "Eggs"],
            instructions: "Mash sweet potatos. Mix with other ingredients. Pour into a pie crust and bake"
        },
        {
            id: 3, 
            title: "Jessica's Corn Casserole", 
            image: "/casserole land.jpg", 
            description: "Jessica's Corn Casserole will be the main star at your next dinner party!", 
            ingredients: ["Corn", "Butter", "Milk", "Cheese", "Breadcrumbs"],
            instructions: "Mix ingredients in a bowl. Pour into baking dish. Bake until golden brown."
        },

        
    ];
    return (
        <div>
            <h1>Winning Recipes</h1>
            <p>These are the top recipes voted by our community!</p>
            <div className='winning-recipes-container'>
                {winningRecipes.map(recipe => (
                    <div key={recipe.id} className='recipe=card'>
                        <h2>{recipe.title}</h2>
                        <img src={recipe.image} alt={recipe.title} />
                        <p>{recipe.description}</p>
                        <h3>Ingredients:</h3>
                        <ul>
                            {recipe.ingredients && recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                        </ul>
                        <h3>Instructions:</h3>
                        <p>{recipe.instructions}</p>
                    </div>
                ))}
        </div>
    </div>
    );
}

export default WinningRecipesPage;