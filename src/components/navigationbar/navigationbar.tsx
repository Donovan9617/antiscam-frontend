import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../config";
import { DarkModeButton } from "../darkmode/darkmodebutton";

export const NavigationBar: React.FC = () => {
  const NavigationBarStyle: React.CSSProperties = {
    backgroundColor: "#00205B",
    justifyContent: "flex-end",
  };

  const NavigationLinkStyle: React.CSSProperties = {
    color: "white",
    textDecoration: "none",
    padding: "10px",
    margin: "0",
    borderRadius: "5px",
    flex: "1",
    display: "flex",
    alignItems: "center",
  };

  const { pathname } = useLocation();

  return (
    <Navbar style={NavigationBarStyle} expand="lg">
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ backgroundColor: "white" }}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="flex-column">
          <DarkModeButton />
          <Nav.Item className="mt-3">
            <Link
              to={ROUTES.DASHBOARD}
              style={{
                ...NavigationLinkStyle,
                backgroundColor:
                  pathname === ROUTES.DASHBOARD ? "#0056b3" : "transparent",
              }}
            >
              Dashboard
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to={ROUTES.CHARTS}
              style={{
                ...NavigationLinkStyle,
                backgroundColor:
                  pathname === ROUTES.CHARTS ? "#0056b3" : "transparent",
              }}
            >
              Charts
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
