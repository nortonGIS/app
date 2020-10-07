import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export let Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/About">Peter Norton</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Projects</Nav.Link>
          <Nav.Link href="/">API Docs</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link
            href="https://github.com/nortonGIS/fire-tools"
            target="external"
          >
            Github
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
