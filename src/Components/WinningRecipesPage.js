import React from 'react';

function WinningRecipesPage() {
    const winningRecipes = [
        {
            id: 1, 
            title: "Martha's Sweet Pickles", 
            image: "/sweetpickles.jpg",
            description: "Martha's homemade 7 day sweet pickles will brighten up your next picnic"
        }, 
        {
            id: 2, 
            title: "Tammy's Sweet Potato Pie", 
            image: "/sweetpotatopie.jpg", 
            description: "Tammy's Sweet Potato pie recipe was passed down for 5 generations and swept the competition and now you can make it at home too!"
        }
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
                    </div>
                ))}
        </div>
    </div>
    );
}

export default WinningRecipesPage;