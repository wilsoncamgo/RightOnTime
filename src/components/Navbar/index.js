import React from 'react'
import {Nav,NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import { FaBars, FaToggleOff} from 'react-icons/fa'
const Navbar = ({toggle}) => {
    return (
      <>
      <Nav>
          <NavbarContainer>
              <NavLogo to="/">Right on Time</NavLogo>
              <MobileIcon onClick={toggle}>
                  <FaBars/>
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinks to="about">Acerca de Nosotros </NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="working">Cómo Funcionamos? </NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="planner">Planifica tu Viaje </NavLinks>
                  </NavItem>
              </NavMenu>
              <NavBtn>
                  <NavBtnLink to='sign_in'>Únete a la Comunidad</NavBtnLink>
              </NavBtn>
          </NavbarContainer>
      </Nav>
      </>  
    );
}

export default Navbar;
