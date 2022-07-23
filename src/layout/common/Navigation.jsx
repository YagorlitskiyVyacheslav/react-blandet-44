import { routes } from "constants";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <NavLink to={routes.TRANSACTIONS}>Transactions</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={routes.ADD_TRANSACTION}>Add transaction</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={routes.NEWS}>News</NavLink>
        </NavItem>
      </NavList>
    </nav>
  );
};
