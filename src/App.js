import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/index';
import Recipes from './pages/recipes';
import Contact from './pages/contact';
import Users from './pages/users';


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />}  />
          <Route path="/users" element={<Users />}  />
        </Routes>
    </Router>
  );
}

export default App;
