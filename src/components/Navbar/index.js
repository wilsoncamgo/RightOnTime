import React ,{useState,Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars, FaToggleOff } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  
  const { currentUser, signout } = useAuth();
  const history = useHistory();
  const [userName, setUserName] = useState("Ingresa");
  const toogleHome = () => {
    scroll.scrollToTop();
  };
  const signOut = () => {
    if (currentUser != null) {
      signout();
    }else{
      setUserName("Ingresa a nuestra comunidad");
      history.push("/sign_in");
    }
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toogleHome}>
            Right on Time
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Acerca de Nosotros{" "}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="working"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Cómo Funcionamos?{" "}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="planner"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Planifica tu Viaje{" "}
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink  onClick={signOut}>
              {userName}
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
