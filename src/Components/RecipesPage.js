import React, { useState, useEffect, useRef } from 'react';
import './RecipesPage.css';

function RecipesPage() {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null); // state for the selected recipe
    const debounceTimeout = useRef(null); // reference to hold the timeout

    // handle search input change
    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    };

    // options for the fetch request
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9466ef1099msh9d43d132b2e9fe5p178235jsna2bc2d51ac9d', 
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    // function to fetch recipes based on the user's search query
    const fetchData = async () => {
        const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=' + query;
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setRecipes(result.results);
        } catch (error) {
            console.error(error);
        }
    };

    // function to fetch detailed recipe information based on the recipe ID
    const fetchRecipeDetails = async (recipeId) => {
        // create the URL to fetch the specific recipe details
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`;

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setSelectedRecipe(result);  // set the detailed recipe to the selectedRecipe state
        } catch (error) {
            console.error("Error fetching detailed recipe: ", error);
        }
    };

    useEffect(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
    
        debounceTimeout.current = setTimeout(() => {
            if (query) {
                fetchData();
            }
        }, 500); 
    
        return () => {
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current);
            }
        };
    }, [query]);

    return (
        <div>
            <h1>Search for Your Favorite Recipe!</h1>
            
            <div className="search-section">
                <input 
                    type="text" 
                    placeholder="Search for a recipe..." 
                    value={query}
                    onChange={handleSearchChange}
                />
            </div>
            
            <div className="recipes-list">
                {recipes && recipes.map(recipe => (
                    <div key={recipe.id} onClick={() => fetchRecipeDetails(recipe.id)}> 
                        <h3>{recipe.title}</h3>
                        <img src={recipe.image} alt={recipe.title} />
                        <p>{recipe.description}</p>
                    </div>
                ))}
            </div>

            {/* display selected recipe details */}
            {selectedRecipe && (
                <div className="recipe-details">
                    <h2>{selectedRecipe.title}</h2>
                    <img src={selectedRecipe.image} alt={selectedRecipe.title} />
                    <ul>
                        {selectedRecipe.extendedIngredients && selectedRecipe.extendedIngredients.map(ingredient => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                    <p>{selectedRecipe.instructions}</p>
                </div>
            )}
        </div>
    );
}

export default RecipesPage;




