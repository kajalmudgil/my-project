
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <HeaderContainer>
            <h1>To-Do List</h1>
        <nav>
            <NavList>
                <NavItem>
                    <StyledLink to="/">Home</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/todo">To-Do List</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/about">About</StyledLink>
                </NavItem>
            </NavList>
        </nav>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
`;

const NavItem = styled.li`
    margin: 0 1rem;
`;
const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
}

`;
export default Header;