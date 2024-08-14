import React, { useState } from 'react'; // import React and useState hook from React
import './SubmitPage.css'; // import the associated sytlesheet

// define the SubmitPage functional component
function SubmitPage() {
    // imitialize state for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        pieName: '',
        ingredients: '',
        preparation: '',
        consent: false
    });
    // function to handle changes
    const handleInputChange = (event) => {
        // destructure name and value from event.target
        const { name, value } = event.target;
        // update state
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };
    // function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // sending the data to a server. No actual submission logic, demo for class 
        console.log(formData);
    };
    // return JSX for the component 
    return (
        <div>
            <h1>Submit Your Best Pie Recipe!</h1>
            <p>Enter our contest for a chance to win the title of 'America's Best Pie' and other exciting prizes!</p>
            
            <form onSubmit={handleSubmit}>
                <h2>Personal Details</h2>
                <input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} />
                <input type="email" name="email" placeholder="Email Address" onChange={handleInputChange} />
                <input type="tel" name="phone" placeholder="Phone Number" onChange={handleInputChange} />
                
                <h2>Recipe Details</h2>
                <input type="text" name="pieName" placeholder="Pie Name" onChange={handleInputChange} />
                <textarea name="ingredients" placeholder="Ingredients" onChange={handleInputChange}></textarea>
                <textarea name="preparation" placeholder="Preparation Steps" onChange={handleInputChange}></textarea>
                
                <label className="consent-label">
                    <input type="checkbox" name="consent" onChange={e => setFormData(prev => ({ ...prev, consent: e.target.checked }))} />
                    I agree to the contest rules and terms of service.
                </label>
                
                <button type="submit">Submit</button>
            </form>
            
             <footer>
                <a href="terms-of-service">Terms of Service</a> | <a href="privacy-policy">Privacy Policy</a>
            </footer>
        </div>
    );
}

export default SubmitPage;
