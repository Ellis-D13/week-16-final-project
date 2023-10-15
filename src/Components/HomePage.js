import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection'; 
import ctaImage from '../cta.jpg';


function HomePage() {
    return (
        
        <div className="landing-page-container">
            <h1>Gourmet Games</h1>
            <p>This is the homepage of the app where you can find delicious recipes and more!</p>
            <HeroSection />

            <div className="cta-container" style={{ backgroundImage: `url(${ctaImage})` }}>
                <Link to="/recipes">
                    <button className="primary-cta-button">
                        Explore Recipes
                    </button>
                </Link>
            </div>
            <h2>The Great American Pie Contest!</h2>
            <p>

Do you believe you've crafted the ultimate pie? Whether it's a family recipe passed down through generations or a fresh twist on an old classic, we want to taste it! Enter our contest for a chance to be crowned as the maker of the "Best Pie in America". Not only will you earn bragging rights, but you'll also have the opportunity to feature your pie recipe on our platform for thousands to admire and recreate. From sweet apple crisps to savory pot pies, we're on the hunt for America's pie champion. So, preheat those ovens and let's see what you've got!</p>
            <div className="cta-container" style={{ backgroundImage: `url(/Winner.jpeg)` }}>
                <Link to="/winning-recipes">
                    <button className="primary-cta-button">
                        Winning Recipes
                    </button>
                </Link>
            </div>

            
        </div>
    );
}

export default HomePage;



