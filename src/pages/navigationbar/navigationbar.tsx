import { useState } from "react";
import { Nav } from "react-bootstrap";
import { NAV_ITEMS_ENUM } from "../../config";
import { NavItemType } from "../../types/types";

export const NavigationBar: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<NavItemType>(
    NAV_ITEMS_ENUM.DASHBOARD
  );
  const handleNavItemClick: (eventKey: NavItemType) => void = (eventKey) => {
    setActiveNavItem(eventKey);
  };

  return (
    <Nav variant="pills" className="flex-column">
      <Nav.Item style={{ marginTop: "20px" }}>
        {/* For not it is / but when login implemented should be /dashboard */}
        <Nav.Link
          href="/"
          style={{ color: "white" }}
          active={activeNavItem === NAV_ITEMS_ENUM.DASHBOARD}
          onClick={() => handleNavItemClick(NAV_ITEMS_ENUM.DASHBOARD)}
        >
          Dashboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          style={{ color: "white" }}
          active={activeNavItem === "second"}
          onClick={() => handleNavItemClick(NAV_ITEMS_ENUM.SECOND)}
        >
          Tab 2
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
