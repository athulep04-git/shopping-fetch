import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.png";

function Header() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="shadow-lg">
      <Container>
        <img
          src={logo}
          alt="logo"
          width="40"
          className="rounded-circle shadow-sm"
        />
        <Navbar.Brand href="/">
          SHOP <span className="fw-bold fs-4">N</span> SHOP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-20">
            <Nav.Link href="/" className="text-light ">
              Home
            </Nav.Link>
            <Nav.Link href="/viewallproducts" className="text-light ">
              view all
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/cart" className="text-light ">
              Cart
            </Nav.Link>
            <Nav.Link href="/wishlist" className="text-light ">
              wishlist
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
