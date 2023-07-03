import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config";
import back from "../../images/back.png";
import { NewCaseForm } from "./newcaseform/newcaseform";

export const NewCase: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToDashboard: () => void = () => {
    navigate(ROUTES.DASHBOARD);
  };
  return (
    <>
      <Container
        className="mt-4"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Button
          onClick={handleBackToDashboard}
          style={{ backgroundColor: "transparent" }}
        >
          <Image
            src={back}
            alt="back"
            style={{ width: "30px", height: "30px" }}
          />
        </Button>
        <h2 style={{ textAlign: "center", flex: 1 }}>Create New Case</h2>
      </Container>
      <Container>
        <NewCaseForm />
      </Container>
    </>
  );
};
