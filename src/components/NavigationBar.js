import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles=styled.div`
  .navbar { 
      background-color: #222; 
    }

    .navbar-collapse

  a, .navbar-nav, .navbar-light .nav-link {
    color:  rgb(219, 202, 219);
    height: 2.5em;
    &:hover { color: white; }
    font-size: 1.3em;
    float: left;
    background-color: inherit;
    font-family: inherit;
    margin: 0;


  }


  .navbar-brand {
    font-size: 2.2em;
    color:  rgb(219, 202, 219);
    &:hover { color: white; }
  }

  
  @media screen and (min-width: 768px) {
    button {
        display: none;
        color: white;
    }
    .links {
        height: auto;
        display: auto;
    }
    li {
        padding: 15px;
        backgroung-color: black;
    }
}
`;
export const NavigationBar=() => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">ArtWorks</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* <Form className="form-center">
                <FormControl type="text" placeholder="Search" className="" />
            </Form> */}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/gallery">Gallery</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/submit">Submit Artwork</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)