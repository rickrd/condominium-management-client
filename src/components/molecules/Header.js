import React, { useState } from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

import ExitIcon from "../atoms/ExitIcon"
import Logo from '../atoms/Logo'
import {routes} from '../../routers/Routes'

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  position: sticky;
  top: 0;
  height: 70px;
  border-bottom: 2px solid #f8f8f9;
  background: #fff;
  line-height: 70px;
`

const Brand = styled.div`
  margin: 0;
  padding: 0.15em 2em;
  border-right: 2px solid #f8f8f9;
  font-size: 1.5em;
  color: #212121;
`

const StyledNavLink = styled.a`
  padding: 0.5em;
  margin: 0 1em;
  border-bottom: 2px solid transparent;
  color: ${({ active }) => (active ? "#1b5e20;" : "#363636")};
  cursor: pointer;
  transition: color 0.2s linear, opacity 0.2s linear;
  &:hover {
    opacity: 0.8;
    color: #303f9f;
  }
`

const Navigation = styled.nav`
  display: none;
  flex: 1 auto;
  padding: 0 2em;
  @media (min-width: 60em) {
    display: block;
  }
`

const MenuToggleBar = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  margin: 5px 0;
  background: #868e96;
`

const MenuToggle = styled.span`
  margin: 0 10px;
  cursor: pointer;
`

const MobileIcons = styled.div`
  display: flex;
  flex: 1 1 auto;
  padding: 0 25px;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: 60em) {
    display: none;
  }
`
const MobileMenu = styled.div`
  position: fixed;
  visibility: hidden;
  flex-wrap: wrap;
  top: 0;
  width: 100vw;
  height: 100vh;
  padding: 1.5em 2em;
  line-height: 1em;
  background: #fff;
  opacity: 0;
  -webkit-transition: opacity 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    visibility 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: opacity 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    visibility 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &.active {
    visibility: visible;
    opacity: 1;
  }
`

const MobileNavLink = styled(StyledNavLink)`
  display: block;
  text-align: center;
`

const MenuCloseIcon = styled.span`
  display: block;
  width: 100%;
  text-align: right;
`

const Header = () => {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false)

  return (
    <StyledHeader>
      <Brand>
        <NavLink to="/">
          <Logo></Logo>
        </NavLink>
      </Brand>

      <Navigation>
        {routes.map(({ title, path, isMenuItem }, index) => isMenuItem && (
          <NavLink key={index} to={path}>
            <StyledNavLink>{title}</StyledNavLink>
          </NavLink>
        ))}
      </Navigation>

      <MobileIcons>
        <MenuToggle onClick={() => setMobileMenuActive(true)}>
          <MenuToggleBar />
          <MenuToggleBar />
          <MenuToggleBar />
        </MenuToggle>
      </MobileIcons>

      <MobileMenu className={`${isMobileMenuActive ? "active" : ""}`}>
        <MenuCloseIcon onClick={() => setMobileMenuActive(false)}>
          <ExitIcon />
        </MenuCloseIcon>

        {routes.map(({ title, path, isMenuItem }, index) => isMenuItem && (
          <NavLink key={index} to={path}>
            <MobileNavLink onClick={() => setMobileMenuActive(false)}>
              {title}
            </MobileNavLink>
          </NavLink>
        ))}
      </MobileMenu>
    </StyledHeader>
  )
}

export default Header