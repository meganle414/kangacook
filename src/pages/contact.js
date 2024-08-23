import './App.css';
import './Contact.css';
import { FaPhone, FaEnvelope, FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import React, { useState } from 'react';
 
const Contact = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Email submitted: ", email);
        setSubscribed(true);
    };

    return (
        <div className="App">
            <body className="App-contact-body">
                <form className="form">
                    <h2 className='Contact-header'>CONTACT US</h2>
                    <p type="Name:"><input placeholder="John Doe" required></input></p>
                    <p type="Email:"><input placeholder="Let us know how to get back to you!" required></input></p>
                    <p type="Message:"><input placeholder="What would you like to tell us?" required></input></p>
                    <button className='Send-message-button'>Send Message</button>
                    <div className="Contact-information">
                        <span><FaPhone class="fa Fa-Phone"/> 444-444-4444</span>
                        <span><FaEnvelope class="fa Fa-Envelope"/><a className="contact-email" href="mailto:contact@kangacook.com"> contact@kangacook.com</a></span>
                    </div>
                </form>
            </body>
            <footer className="App-footer">
                <a href="mailto:info@kangacook.com" className="info-email" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaEnvelope style={{ marginRight: '5px' }}></FaEnvelope> info@kangacook.com</a>
                {subscribed && <p className="subscription-message">You have successfully subscribed!</p>}
                <form className="Newsletter-email-form">
                    <input
                        type="text"
                        className="Newsletter-email-input"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        required
                    />
                    <button className="Newsletter-email-submit-button" type="submit" onClick={handleSubmit}>SUBSCRIBE</button>
                </form>
                <a href='https://www.facebook.com/profile.php?id=61561452261888'><FaFacebookSquare style={{color: '#FF5C00', fontSize: '1.5em'}}></FaFacebookSquare></a>
                <a href='https://www.linkedin.com/company/roulettech-inc/'><FaLinkedin style={{color: '#FF5C00', fontSize: '1.5em'}}></FaLinkedin></a>
                <a href='https://www.instagram.com/kangacook_official/'><FaInstagramSquare style={{color: '#FF5C00', fontSize: '1.5em'}}></FaInstagramSquare></a>
                <a href='https://www.youtube.com/channel/UC_DgEDskMZgKKP9wlUe1xgw'><FaYoutube style={{color: '#FF0000', fontSize: '1.5em'}}></FaYoutube></a>
                <p>© 2024 Kangacook. All rights reserved. | <a className="footer-terms" href="https://www.termsfeed.com/live/93288d56-1cc2-41a0-b02b-df39f874782b">Privacy Policy</a></p>
            </footer>
      </div>
    );
};
 
export default Contact;