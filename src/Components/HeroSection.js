import React from 'react';
import './HeroSection.css';  

function HeroSection() {
    return (
        <div className="hero-section">
            <img src="/HeroSection.jpg" alt="Gourmet Games" className="hero-image" />
            <div className="hero-text-container">
                <h1 className="hero-title">Unleash Your Culinary Creativity!</h1>
                <p className="hero-subtitle">Share, Compete, and Win in Gourmet Games</p>
            </div>
            <button className="hero-cta">Join Now</button>
        </div>
    );
}

export default HeroSection;
