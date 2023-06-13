import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const NavigationBar = () => {
  return (
    <Navbar variant="dark">
      <Nav>
        {/* For not it is / but when login implemented should be /dashboard */}
        <Nav.Link href="/">Dashboard</Nav.Link>
      </Nav>
    </Navbar>
  );
};
