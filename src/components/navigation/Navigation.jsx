import React, {useState} from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavigationStyle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);
  return (
    <Nav>
      <Logo to="/">
        <FaBirthdayCake className="pb-2"/>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">HOME</MenuLink>
        <MenuLink to='/guest-list'>RSVP</MenuLink>
        <MenuLink to="/login">LOGIN</MenuLink>       
      </Menu>
    </Nav>
	);
};

export default Navigation;
