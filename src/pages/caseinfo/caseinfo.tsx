import { useEffect, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import back from "../../assets/images/back.png";
import edit from "../../assets/images/edit.png";
import { ROUTES } from "../../config";
import {
  BANK_ACCOUNT_ENUM,
  CASE_SCAMTYPE_ENUM,
  CASE_STATUS_ENUM,
} from "../../types/enums";
import { CaseInfoDataType } from "../../types/types";
import { CaseInfoEdit } from "./caseinfoedit/caseinfoedit";
import { CaseInfoGrid } from "./caseinfogrid/caseinfogrid";

export const CaseInfo: React.FC = () => {
  const { caseid } = useParams();
  const navigate = useNavigate();
  const [caseInformation, setCaseInformation] = useState<
    CaseInfoDataType | undefined
  >();
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleBack: () => void = () => {
    editMode ? setEditMode(!editMode) : navigate(ROUTES.DASHBOARD);
  };

  const handleEditCaseInfo: () => void = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    // API call to backend to obtain JSON with this obtained caseid
    // Since no DB yet, we assume this is the returned data
    const data: CaseInfoDataType = {
      caseid: "c17ff314-87f0-49e5-8adc-a5c3dceaa44b",
      datereferral: new Date(2023, 5, 10, 21, 0),
      phonenumber: 91234567,
      scamtype: CASE_SCAMTYPE_ENUM.JOB_SCAM,
      bankaccount: BANK_ACCOUNT_ENUM.DBS,
      accountnumber: "322-772-441",
      amountscammed: 90000,
      assignee: "Tom",
      status: CASE_STATUS_ENUM.ACTIVATED,
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
