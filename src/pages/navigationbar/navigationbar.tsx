import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NAV_ITEMS_ENUM, ROUTES } from "../../config";
import { NavItemType } from "../../types/types";

export const NavigationBar: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<NavItemType>(
    NAV_ITEMS_ENUM.DASHBOARD
  );

  const NavigationBarStyle: React.CSSProperties = {
    backgroundColor: "#00205B",
    justifyContent: "flex-end",
  };

  const NavigationLinkStyle: React.CSSProperties = { color: "white" };

  const handleNavItemClick: (eventKey: NavItemType) => void = (eventKey) => {
    setActiveNavItem(eventKey);
  };

  return (
    <Navbar style={NavigationBarStyle} expand="lg">
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ backgroundColor: "white" }}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav variant="pills" className="flex-column">
          <Nav.Item style={{ marginTop: "20px" }}>
            {/* For not it is / but when login implemented should be /dashboard */}
            <Nav.Link
              href={ROUTES.DASHBOARD}
              style={NavigationLinkStyle}
              active={activeNavItem === NAV_ITEMS_ENUM.DASHBOARD}
              onClick={() => handleNavItemClick(NAV_ITEMS_ENUM.DASHBOARD)}
            >
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={NavigationLinkStyle}
              active={activeNavItem === NAV_ITEMS_ENUM.SECOND}
              onClick={() => handleNavItemClick(NAV_ITEMS_ENUM.SECOND)}
            >
              Tab 2
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
