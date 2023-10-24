import React from 'react';
import { Link } from 'react-router-dom';

// define the FooterComponent functional component
function FooterComponent() {
    return (
        // container for the entire footer
        <div className="footer-container">
            <div className="footer-links">
                <Link to="/about-us">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/terms-of-service">Terms of Service</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
            </div>

            <div className="footer-contact">
                <p>Email: contact@gourmetgames.com</p>
                <p>Phone: +1 (123) 456-7890</p>
            </div>

            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} Gourmet Games. All rights reserved.</p>
            </div>
        </div>
    );
}
// export footer to all other parts of the app
export default FooterComponent;
