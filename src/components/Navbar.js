import logo from './logo.svg';
import React, { useContext } from "react";
import { Nav, NavLink, NavMenu, LogoutButton } from "./NavbarElements";
import { FaHome, FaAppleAlt, FaRegComment, FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
 
const Navbar = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        navigate('/');
    };

    return (
        <>
            <Nav>
                <NavMenu>
                    <img src={logo} className="App-logo" alt="logo" />
                    <NavLink to="/" activeStyle><FaHome style={{marginRight: '5px'}}></FaHome>
                        Home
                    </NavLink>
                    <NavLink to="/recipes" activeStyle><FaAppleAlt style={{marginRight: '5px'}}></FaAppleAlt>
                        Recipes
                    </NavLink>
                    <NavLink to="/contact" activeStyle><FaRegComment style={{marginRight: '5px'}}></FaRegComment>
                        Contact Us
                    </NavLink>
                    {/* <NavLink to="/login" activeStyle><FaRegUser style={{marginRight: '5px' }}></FaRegUser>
                        Login
                    </NavLink> */}
                    {!user ? (
                        <NavLink to="/login" activeStyle>
                            <FaRegUser style={{ marginRight: '5px' }} /> Login
                        </NavLink>
                    ) : (
                        <>
                            <NavLink to="/profile" activeStyle>
                                <FaRegUser style={{ marginRight: '5px' }} /> Profile
                            </NavLink>
                            <LogoutButton onClick={handleLogout}>
                                <FaSignOutAlt />
                            </LogoutButton>
                        </>
                    )}
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;