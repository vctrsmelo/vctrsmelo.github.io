import React from 'react'
import styled from 'styled-components';

const Navbar = styled.nav`
  width: 100%;
  background-color: #333;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

const NavItem = styled.a`
  color: #fff;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;
  font-size: 1.2rem;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background-color: #575757;
    color: #fff;
  }
`;

const NavBarComponent = () => {
  return (
    <Navbar>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/portfolio">Portfolio</NavItem>
    </Navbar>
  );
};

export default NavBarComponent;
