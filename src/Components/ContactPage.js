import React, { useState } from 'react'; 

// define the ContactUs function component
const ContactPage = () => {
    // state variables for form fields
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // function ot handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log({ name, email, subject, message });
    };

    return (
        <div>
           <h1>Contact Us</h1>
           {/* form start */}
           <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
             </div>
             <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Subject:</label>
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div>
                <label>Message:</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
           </form>
        </div>
    );
}

export default ContactPage;