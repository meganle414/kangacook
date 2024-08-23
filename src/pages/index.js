import './App.css';
import React, { useState } from 'react';
import { FaLongArrowAltRight, FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaYoutube, FaEnvelope } from "react-icons/fa";
 
const Index = () => {
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
            <head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
                </style>
            </head>
            <body className="App-index-body">
                <br></br>
                <div className='App-index-smaller-element'>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1214757157.png" alt="ramen" width={300}></img>
                </div>
                <div className="App-index-larger-element">
                    <h2>Discover your Asian Stomach!</h2>
                    <p>Kangacook invites you to share your cooking ideas, explore recipes from all over the world, and enjoy the pleasure of cooking and sharing!</p>
                    <p className='subtitle'>Get a chance to win $15 Amazon gift card! We are preparing our website, help us improve our service by answering a few questions!</p>
                    <div className='questionnaire' style={{ flex: 1, display: 'flex', flexDirection: 'row', marginLeft: '100px' }}>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSf3dLj9KiFfhP0Pp-va1h8ovdSyAfDguGFniOrRRN0vRY1KpA/viewform'>
                            <FaLongArrowAltRight color='#fff' style={{ marginRight: '20px', transform: 'scale(3)'}}></FaLongArrowAltRight>
                            <p>Questionnaire</p>
                        </a>
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
 
export default Index;