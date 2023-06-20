import { useEffect, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../config";
import back from "../../images/back.png";
import edit from "../../images/edit.png";
import { CaseInfoEdit } from "./caseinfoedit/caseinfoedit";
import { CaseInfoGrid } from "./caseinfogrid/caseinfogrid";

export const CaseInfo = () => {
  const { caseid } = useParams();
  const navigate = useNavigate();
  const [caseInformation, setCaseInformation] = useState();
  const [editMode, setEditMode] = useState(false);

  const handleBack = () => {
    editMode ? setEditMode(!editMode) : navigate(ROUTES.DASHBOARD);
  };

  const handleEditCaseInfo = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    // API call to backend to obtain JSON with this obtained caseid
    // Since no DB yet, we assume this is the returned data
    const data = {
      caseid: 123,
      datereferral: new Date(2023, 5, 10, 21, 0),
      phonenumber: "91234567",
      scamtype: "Job scam",
      accountbank: "POSB",
      accountnumber: "322-772-441",
      amountscammed: 90000,
      description: "Testing",
    };
    setCaseInformation(data);
  }, [editMode]);

  return (
    <>
      <Container
        style={{ marginTop: 20, display: "flex", alignItems: "center" }}
      >
        <Button onClick={handleBack} style={{ backgroundColor: "transparent" }}>
          <Image
            src={back}
            alt="back"
            style={{ width: "30px", height: "30px" }}
          />
        </Button>
        <h2 style={{ textAlign: "center", flex: 1 }}>
          {editMode ? "Edit " : ""}
          Case ID: {caseid}
        </h2>
        {editMode ? (
          <></>
        ) : (
          <Button
            onClick={handleEditCaseInfo}
            style={{ backgroundColor: "transparent" }}
          >
            <Image
              src={edit}
              alt="edit"
              style={{ width: "30px", height: "30px" }}
            />
          </Button>
        )}
      </Container>
      <Container style={{ marginTop: "30px" }} className="text-center">
        {editMode ? (
          <CaseInfoEdit
            caseInformation={caseInformation}
            setEditMode={setEditMode}
          />
        ) : (
          <CaseInfoGrid caseInformation={caseInformation} />
        )}
      </Container>
    </>
  );
};
