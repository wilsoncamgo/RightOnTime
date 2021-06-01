import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
} from "./SidebarElements";
const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>Acerca de Nosotros</SidebarLink>
          <SidebarLink to="working" onClick={toggle}>Como Funcionamos?</SidebarLink>
          <SidebarLink to="planner" onClick={toggle}>Planifica tu Viaje</SidebarLink>
          <SidebarLink to="sign_in" onClick={toggle}>Únete a la Comunidad</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/sign_in">Unete</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
