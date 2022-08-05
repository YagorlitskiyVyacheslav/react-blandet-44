import { routes } from "constants";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.tertiaryShade2};
  font-weight: 700;
  transition-duration: 500ms;
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <StyledNavLink to={routes.TRANSACTIONS}>Transactions</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to={routes.ADD_TRANSACTION}>
            Add transaction
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to={routes.NEWS}>News</StyledNavLink>
        </NavItem>
      </NavList>
    </nav>
  );
};
