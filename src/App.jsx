import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./config";
import { CaseInfo } from "./pages/caseinfo/caseinfo";
import { Dashboard } from "./pages/dashboard/dashboard";
import { NavigationBar } from "./pages/navigationbar/navigationbar";
import { NewCase } from "./pages/newcase/newcase";

export const App = () => {
  return (
    <BrowserRouter>
      <Row>
        <Col sm={1} style={{ backgroundColor: "#00205B", minHeight: "100vh" }}>
          <NavigationBar />
        </Col>
        <Col sm={11} style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.NEWCASE} element={<NewCase />} />
            <Route path={ROUTES.CASEINFO} element={<CaseInfo />} />
          </Routes>
        </Col>
      </Row>
    </BrowserRouter>
  );
};
