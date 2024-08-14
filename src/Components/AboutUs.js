import React, { useState } from "react";

// define the AboutUs function component
const AboutUs = () => {
    return (
        <div>
            <h1>About Gourmet Games</h1>
            <img src="/GG logo.png" alt="Gourmet Games Logo" />

        <section>
        <h2>Our Mission</h2>
        <p>
            At Gourmet Games, we aim to bring culinary enthusiast together to compete, learn, and celebrate the art of cooking.
        </p>
        </section>

        <section>
            <h2>Winning Recipes</h2>
            <p>
                Discover award-winning recipes for pickles, pies, casseroles, and more! Be inspired to submit your own winning recipe!
            </p>
        </section>

        <section>
            <h2>Our Judges</h2>
            <p>Recipes are voted on by you! Share your recipe and if selected by our internal pannel you can share on social for winning votes!</p>
        </section>

        <section>
            <h2>Contact Us</h2>
            <address>
                Email: gourmetgames@gourmetgames.com <br />
                Phone: (123) 456-7890
            </address>
        </section>
         </div>
    );
};

export default AboutUs; 