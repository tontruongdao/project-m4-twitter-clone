import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";

import { COLORS } from "./COLORS";

const Sidebar = ({ children }) => {
  return (
    <Wrapper>
      <Nav>
        <Logo />
        <NavList>
          <li>
            <StyledLink exact activeStyle={{ color: COLORS.primary }} to="/">
              <FiHome size={30} />
              <span>Home</span>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              exact
              activeStyle={{ color: COLORS.primary }}
              to="/treasurymog"
            >
              <FiUser size={30} />
              <span>Profile</span>
            </StyledLink>
          </li>
          <li>
            <StyledLink activeStyle={{ color: COLORS.primary }} to="#">
              <FiBell size={30} />
              <span>Notifications</span>
            </StyledLink>
          </li>
          <li>
            <StyledLink activeStyle={{ color: COLORS.primary }} to="#">
              <FiBookmark size={30} />
              <span>Bookmark</span>
            </StyledLink>
          </li>
        </NavList>
      </Nav>
      {children}
    </Wrapper>
  );
};

const Nav = styled.nav`
  /* border: 5px solid red; */
  flex: 1;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;

  /* border: 5px dashed green; */
  height: 100vh;
`;

const NavList = styled.ul`
  /* border: 5px solid gold; */
  list-style-type: none;
  padding: 5px;
  margin: 5px;

  & li {
    text-decoration: none;
  }
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 22px;
  text-decoration: none;
  padding: 10px 5px;
  border-radius: 15px;
  color: black;

  & span {
    margin-left: 5px;
  }

  &:hover {
    background: ${COLORS.secondary};
    color: ${COLORS.primary};
  }
`;

export default Sidebar;
