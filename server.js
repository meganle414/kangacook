const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/api/search', (req, res) => {
  const searchTerm = req.query.searchTerm;

  const recipes = [
    { id: "pho-bo", name: "Phở Bò" },
    { id: "banh-mi", name: "Bánh Mì" },
    { id: "green-curry", name: "Green Curry" },
    { id: "pad-thai", name: "Pad Thai" },
    { id: "butter-chicken", name: "Butter Chicken" },
    { id: "garlic-naan", name: "Garlic Naan" },
    { id: "kimbap", name: "Kimbap" },
    { id: "japchae", name: "Japchae" },
    { id: "unagi-don", name: "Unagi Don (Eel Rice Bowl)" },
    { id: "sushi", name: "Sushi" },
    { id: "char-siu", name: "Char Siu" },
    { id: "mapo-tofu", name: "Mapo Tofu" },
    { id: "scallion-pancake", name: "Scallion Pancake" },
    { id: "xiao-long-bao", name: "Xiao Long Bao (Soup Dumplings)" },
  ];
  
  const filteredRecipes = recipes.filter(recipe => recipe.id === searchTerm);
  res.json(filteredRecipes);
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});