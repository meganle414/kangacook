import axios from 'axios';
import './App.css';
import React, { useContext, useState } from 'react';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaYoutube, FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
 
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState(null);
    const [subscriptionEmail, setSubscriptionEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePasswordChange2 = (event) => {
        setPassword2(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== password2) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/users/${email}`, {
                params: {
                    email: email,
                },
            });

            if (response.status === 200 && response.data) {
                console.log("User already exists!", response.data);
                setError("User already exists!");
                return;
            } else {
                console.error("Login error:", error);
                setError("Invalid email or password");
            }
        } catch (error) {
            console.log("Account created!");
            setUser(email);
            navigate('/profile')
        }
    };

    const handleSubscriptionEmailChange = (event) => {
        setSubscriptionEmail(event.target.value);
    };

    const handleSubscriptionSubmit = (event) => {
        event.preventDefault();
        console.log("Email submitted: ", subscriptionEmail);
        setSubscribed(true);
    };

    return (
        <div className="App">
            <body className="App-gradient-body" style={{ textAlign: 'left', paddingLeft: '50px' }}>
                <form className='form' method='post' action='' onSubmit={handleSubmit}>
                    <h2 className='form-header'>SIGN UP</h2>
                    <p type="Email:"><input value={email} onChange={handleEmailChange} placeholder="Email" required></input></p>
                    <p type="Password:"><input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required></input></p>
                    <p type="Re-enter Password:"><input type="password" value={password2} onChange={handlePasswordChange2} placeholder="Re-enter Password" required></input></p>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className='Submit-button'>Sign Up</button>
                </form>
            </body>
            <footer className="App-footer">
                <a href="mailto:info@kangacook.com" className="info-email" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaEnvelope style={{ marginRight: '5px' }}></FaEnvelope> info@kangacook.com</a>
                {subscribed && <p className="subscription-message">You have successfully subscribed!</p>}
                <form className="Newsletter-email-form">
                    <input
                        type="text"
                        className="Newsletter-email-input"
                        value={subscriptionEmail}
                        onChange={handleSubscriptionEmailChange}
                        placeholder="Enter your email"
                        required
                    />
                    <button className="Newsletter-email-submit-button" type="submit" onClick={handleSubscriptionSubmit}>SUBSCRIBE</button>
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
 
export default SignUp;