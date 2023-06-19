import { useEffect, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../config";
import back from "../../images/back.png";
import { CaseInfoGrid } from "./caseinfogrid/caseinfogrid";

export const CaseInfo = () => {
  const { caseid } = useParams();
  const navigate = useNavigate();
  const [caseInformation, setCaseInformation] = useState();

  const backToDashboardButtonHandler = () => {
    navigate(ROUTES.DASHBOARD);
  };

  useEffect(() => {
    // API call to backend to obtain JSON with this obtained caseid
    // Since no DB yet, we assume this is the returned data
    const data = {
      caseid: 123,
      description: "Testing",
      datereferral: new Date(2023, 5, 10, 21, 0),
      scamtype: "Job scam",
      assignee: "Tom",
      status: "Activated",
    };
    setCaseInformation(data);
  }, []);

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
        <h2 style={{ textAlign: "center", flex: 1 }}>Case ID: {caseid}</h2>
      </Container>
      <Container style={{ marginTop: "30px" }} className="text-center">
        <CaseInfoGrid caseInformation={caseInformation} />
      </Container>
    </>
  );
};
