import { Button, Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config";
import back from "../../images/back.png";
import { NewCaseForm } from "./newcaseform/newcaseform";

export const NewCase = () => {
  const navigate = useNavigate();

  const backToDashboardButtonHandler = () => {
    navigate(ROUTES.DASHBOARD);
  };
  return (
    <>
      <Container
        style={{ marginTop: 20, display: "flex", alignItems: "center" }}
      >
        <Button
          onClick={backToDashboardButtonHandler}
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
      <Container style={{ marginTop: "30px" }}>
        <NewCaseForm />
      </Container>
    </>
  );
};
