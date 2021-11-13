import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  max-width: 90vw;
  margin: 0 auto;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Brand = styled.h1`
  font-size: var(--step-up-1);
`
export const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50vw;
`

export const MenuLink = styled.li`
  margin-left: 2em;
  text-decoration: none;
`

export default () => (
  <StyledHeader>
    <Brand>Clients simulator</Brand>
    <Menu>
    <MenuLink>
      <NavLink to='/' className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
            Home
      </NavLink>
    </MenuLink>
    <MenuLink>
      <NavLink to='/simulator/web' className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
            Web Simulator
      </NavLink>
    </MenuLink>
    <MenuLink>
      <NavLink to='/simulator/mobile' className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
            Mobile Simulator
      </NavLink>
    </MenuLink>
    </Menu>
  </StyledHeader>
);
