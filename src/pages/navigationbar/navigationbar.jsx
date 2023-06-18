import React, { useState } from "react";
import { Nav } from "react-bootstrap";

export const NavigationBar = () => {
  const [activeNavItem, setActiveNavItem] = useState("dashboard");
  const handleNavItemClick = (eventKey) => {
    setActiveNavItem(eventKey);
  };
  return (
    <Nav variant="pills" className="flex-column">
      <Nav.Item style={{ marginTop: "20px" }}>
        {/* For not it is / but when login implemented should be /dashboard */}
        <Nav.Link
          href="/"
          style={{ color: "white" }}
          active={activeNavItem === "dashboard"}
          onClick={() => handleNavItemClick("dashboard")}
        >
          Dashboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          style={{ color: "white" }}
          active={activeNavItem === "second"}
          onClick={() => handleNavItemClick("second")}
        >
          Tab 2
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
