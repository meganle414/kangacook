import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight, FaEnvelope, FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import RecipeCard from '../components/RecipeCard';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const cuisines = ['Cantonese', 'Szechuan', 'Taiwanese', 'Korean', 'Japanese', 'Indian', 'Thai', 'Vietnamese', 'Filipino'];

const CarouselWrapper = styled.div`
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 30px;

  .react-multi-carousel-arrow {
    position: absolute !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    z-index: 10 !important;
    background-color: rgba(0, 0, 0, 0.5)
    border: none !important;
    padding: 10px !important;
    cursor: pointer !important;
  }
`;

const RecipeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;

  & > div {
    flex: 1 1 calc(25% - 20px);
    max-width: calc(25% - 20px);
    box-sizing: border-box;
  }
`;

const Header = styled.h2`
  cursor: pointer;
  margin: 20px 0 10px 40px;
  color: #000;
  text-align: left;
  display: flex;
  align-items: center;
`;

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [viewMode, setViewMode] = useState('carousel'); // 'list' or 'carousel'
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/recipes/')
      .then(response => setRecipes(response.data))
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

  const handleCuisineClick = (cuisine) => {
    setSelectedCuisine(cuisine);
    setViewMode('list');
  };

  const handleAllRecipesClick = () => {
    if (selectedCuisine === null && viewMode === 'list') {
      setViewMode('carousel');
    } else {
      setSelectedCuisine(null);
      setViewMode('list');
    }
  };

  const handleBackClick = () => {
    setSelectedCuisine(null);
    setViewMode('carousel');
  };

  const filteredRecipes = selectedCuisine
    ? recipes.filter(recipe => recipe.cuisine === selectedCuisine)
    : recipes;

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 600 }, items: 2 },
    mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
  };

  return (
    <div className="App">
      <body className="App-recipes-body">
        <br />
        {viewMode === 'list' && (
          <>
            <Header onClick={handleBackClick}>
              <FaAngleLeft /> Back
            </Header>
            <Header style={{ textAlign: 'center', justifyContent: 'center', transform: 'scale(1.5)', }}>
              {selectedCuisine ? `${selectedCuisine} Recipes` : 'All Cuisines'}
            </Header>
            <RecipeList>
              {filteredRecipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}
            </RecipeList>
          </>
        )}

        {viewMode === 'carousel' && (
          <>
            <Header onClick={handleAllRecipesClick}>
              All Recipes <FaAngleRight />
            </Header>
            <CarouselWrapper>
              <Carousel responsive={responsive}>
                {recipes.map((recipe, index) => (
                  <RecipeCard key={index} recipe={recipe} />
                ))}
              </Carousel>
            </CarouselWrapper>
          </>
        )}
        
        {viewMode === 'carousel' && cuisines.map((cuisine) => (
          <div key={cuisine}>
            <Header onClick={() => handleCuisineClick(cuisine)}>
              {cuisine} <FaAngleRight />
            </Header>
            <CarouselWrapper>
              <Carousel responsive={responsive}>
                {recipes
                  .filter((recipe) => recipe.cuisine === cuisine)
                  .map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                  ))}
              </Carousel>
            </CarouselWrapper>
          </div>
        ))}
        <br></br>
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

export default Recipes;
