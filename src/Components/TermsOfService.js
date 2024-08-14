import React, { useState } from "react";
// define terms of service functional component 
const TermsOfService = () => {
    // render the component
    return (
        // root container 
        <div className="container">
            <h1>Terms of Service</h1>
            <div className="terms-container">
                <h2>Gourmet Games Contest Terms</h2>
                <p>
                    Welcome to Gourmet Games! By participating in our contests, you agree to abide bu the following terms and conditions. 
                </p>
                <h3>Eligibility</h3>
                <p>
                    To enter the contest, you must be at least 18 years old and a resident of the Earth.
                </p>
                <h3>Entry Period</h3>
                <p>
                    The contest opens at 12:00am EST on the first day of every month and closes at 11:59m EST on the last day of the month. 
                </p>
                <h3>How to Enter</h3>
                <p>
                    To enter the contest, follow the submission guidelines provided on the "Submit to Win" page.
                </p>
                <h3>Prizes</h3>
                <p>
                    Winners will be selected by voters choice, be sure to share on social. Prizes are not ranserable or exhangeable.
                </p>
                <h3>Data Usage</h3>
                <p>
                    By entering, you consent to the collection and use of your personal data as described in our Privacy Policy.
                </p>
                <h3>Disclaimer</h3>
                <p>
                    Gourmet Games reserves the right to cancel or modify the contest at its discretion.
                </p>
                <button onClick={() => alert("You've agreed to the terms!")}>
                    I Agree
                </button>
                
            </div>
        </div>
    );
};

export default TermsOfService; 