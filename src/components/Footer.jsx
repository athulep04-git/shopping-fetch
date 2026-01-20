import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container className="text-center">
        <p className="mb-0">
          All Rights Reserved <span className="fw-bold">ShopNShop</span>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
