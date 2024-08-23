import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  height: 450px;
  margin: 10px;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RecipeContent = styled.div`
  padding: 15px;
  padding-bottom: 45px;
`;

const RecipeTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  flex-shrink: 0;
  height: 3em;
  overflow: hidden;
`;

const RecipeDescription = styled.p`
  color: #777;
  flex-grow: 1;
  height: 5em;
  overflow: hidden;
`;

const RecipeCuisine = styled.p`
  position: absolute;
  bottom: 10px;
  left: 10px;
  height: 25px;
  width: 100px;
  background-color: #FF5C00;
  border-radius: 15px;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RecipeCard = ({ recipe }) => {
  return (
    <Card>
      <RecipeImage src={recipe.image} alt={recipe.title} />
      <RecipeContent>
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <RecipeDescription>{recipe.description}</RecipeDescription>
        <RecipeCuisine>{recipe.cuisine}</RecipeCuisine>
      </RecipeContent>
    </Card>
  );
};

export default RecipeCard;
