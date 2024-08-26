import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/index';
import Recipes from './pages/recipes';
import Contact from './pages/contact';
import SignUp from './pages/sign-up';
import Login from './pages/login';
import Profile from './pages/profile';
import { UserContext } from './UserContext';

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/contact" element={<Contact />}  />
            <Route path="/sign-up" element={<SignUp />}  />
            <Route path="/login" element={<Login />}  />
            <Route path="/profile" element={<Profile />}  />
          </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
