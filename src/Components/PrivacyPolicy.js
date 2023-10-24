import React, { useState } from "react";


// define the PrivacyPolicy functional component 
const PrivacyPolicy = () => {
    return (
        // container for the privacy policy info
        <div className="privacy-policy-container">
            <h1>Privacy Policy for Gourmet Games</h1>

            <h2>Introduction</h2>
            <p>Welcome to the Gourmet Games privacy policy. Your privacy is critically important to us.</p>
        
            <h2>Information We Collect</h2>
            <p>We collect various types of information for various purposes to provide and improve our service to you.</p>
        
            <h2>Use of Data</h2>
            <p>We use the collected data for various purposes, including to provide and maintain our service, notify you about changes, etc.</p>
        
            <h2>Sercurity of Data</h2>
            <p>The security of your data is important to us but remember that no method of transmission over the Internet is 100% secure.</p>
        
            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us.</p>

        </div>
    );
};

export default PrivacyPolicy; 