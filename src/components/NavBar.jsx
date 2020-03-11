import React from 'react';
import { Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
        <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" />
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
