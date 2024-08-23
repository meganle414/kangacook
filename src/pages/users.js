import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';
import { FaUser, FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaYoutube, FaEnvelope } from "react-icons/fa";
 
const Users = () => {
    const [usernames, setUsernames] = useState([]);
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/users/')
          .then(response => setUsernames(response.data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

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
            <body className="App-body" style={{ textAlign: 'left', paddingLeft: '50px' }}>
                <br></br>
                <h2 style={{ transform: 'scale(1.5)', paddingLeft: '275px' }}>Member List</h2>
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <h1 style={{ marginBottom: '5px', marginLeft: '20px' }}>Username</h1>
                        {usernames.map((user, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                <FaUser style={{ marginRight: '10px' }} />
                                <p style={{ margin: '10px 0' }}>{user.username}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: '-1100px' }}>
                        <h1 style={{ marginBottom: '5px' }}>Email</h1>
                        {usernames.map((user, index) => (
                            <p key={index} style={{ margin: '10px 0' }}>{user.email}</p>
                        ))}
                    </div>
                </div>
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
 
export default Users;