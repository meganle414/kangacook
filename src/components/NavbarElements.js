import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    min-height: 20vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    box-sizing: border-box;
    padding: 0.2rem;
    margin: 0 auto;
    max-width: 1000px;
    white-space: nowrap;
    z-index: 12;
`;
 
export const NavLink = styled(Link)`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-weight: bold;
    font-size: calc(10px + 2vmin);
    cursor: pointer;
    &.active {
        color: #FF5C00;
    }
`;
 
export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -35px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
    white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const LogoutButton = styled.button`
    background: red;
    border: none;
    color: white;
    padding: 5px 10px;
    marginLeft: 10px;
    cursor: pointer;
`;