import logo from './logo.svg';
import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { FaHome, FaAppleAlt, FaRegComment, FaSmileBeam } from "react-icons/fa";
 
const Navbar = () => {
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
                    <NavLink to="/users" activeStyle><FaSmileBeam style={{marginRight: '5px' }}></FaSmileBeam>
                        Our Happy Members
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;