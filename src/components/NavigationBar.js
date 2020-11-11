import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { 
    background-color: #FFFFFF;
    box-shadow: 0 3.5px 2px -2px rgba(0,0,0,.2); 
  }

  a, .navbar-nav, .navbar-light .nav-link {
    color: #333333;
    &:hover { color: #62B0FF; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #333333;
    &:hover { color: #62B0FF; }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Profiles</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/community-profile">Community Profile</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/search">Search</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/my-profile">My Profile</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/login">Sign Out</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)