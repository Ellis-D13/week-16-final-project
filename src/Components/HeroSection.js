import React from 'react';
import './HeroSection.css';  
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className="hero-section">
            <img src="/HeroSection.jpg" alt="Gourmet Games" className="hero-image" />
            <div className="hero-text-container">
                <h1 className="hero-title">Unleash Your Culinary Creativity!</h1>
                <p className="hero-subtitle">Share, Compete, and Win in Gourmet Games</p>
            </div>
            <Link to="/submit">
            <button className="hero-cta">Enter Your Recipe to Win</button>
            </Link>
        </div>
    );
}

export default HeroSection;
