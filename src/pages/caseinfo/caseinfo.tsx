import { useEffect, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "../../components/darkmode/themeprovider";
import { ROUTES } from "../../config";
import back from "../../images/back.png";
import edit from "../../images/edit.png";
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
  const [currentTheme] = useTheme();

  const CaseInfoIconStyle: React.CSSProperties = {
    width: "30px",
    height: "30px",
    filter: currentTheme === "dark" ? "invert(0.7)" : "none",
  };

  const CaseInfoButtonStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    border: "none",
  };

  const handleBack: () => void = () => {
    editMode ? setEditMode(!editMode) : navigate(ROUTES.DASHBOARD);
  };

  const handleEditCaseInfo: () => void = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    // Mock data for now
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
      casefile: undefined,
      // casefile: new File([], "case_info.pdf", { type: "application/pdf" }),
    };
    setCaseInformation(data);

    // getCaseInfo(caseid).then((data: CaseInfoDataType) => {
    //   setCaseInformation(data);
    // });
    // setCaseInformation(data);
  }, [editMode]);

  return (
    <>
      <Container
        className="mt-4"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Button onClick={handleBack} style={CaseInfoButtonStyle}>
          <Image src={back} alt="back" style={CaseInfoIconStyle} />
        </Button>
        <h2 style={{ textAlign: "center", flex: 1 }}>
          {editMode ? "Edit " : ""}
          Case ID: {caseid}
        </h2>
        {editMode ? (
          <></>
        ) : (
          <Button onClick={handleEditCaseInfo} style={CaseInfoButtonStyle}>
            <Image src={edit} alt="edit" style={CaseInfoIconStyle} />
          </Button>
        )}
      </Container>
      <Container className="mt-5 text-center">
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
