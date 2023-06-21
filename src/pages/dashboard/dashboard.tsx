import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { CASE_STATUS_ENUM, FILTERED_CASE_STATUS_ENUM } from "../../config";
import { CaseDataType1, FilteredCaseStatusType } from "../../types/types";
import { CaseStatistics } from "./casestatistics/casestatistics";
import { CaseTable } from "./casetable/casetable";
import { CaseTools } from "./casetools/casetools";

export const Dashboard: React.FC = () => {
  const [caseData, setCaseData] = useState<CaseDataType1[]>([]);
  const [filteredCaseStatus, setFilteredCaseStatus] =
    useState<FilteredCaseStatusType>(FILTERED_CASE_STATUS_ENUM.NONE);

  useEffect(() => {
    // API call to obtain the backend data in JSON
    const data: CaseDataType1[] = [
      {
        datereferral: new Date(2023, 5, 10, 21, 0),
        caseid: 123,
        description: "Testing",
        scamtype: "Job scam",
        assignee: "Tom",
        status: CASE_STATUS_ENUM.ACTIVATED,
      },
      {
        datereferral: new Date(2023, 5, 9, 22, 0),
        caseid: 456,
        description: "Testing again",
        scamtype: "Investment scam",
        assignee: "John",
        status: CASE_STATUS_ENUM.ACTIVATED,
      },
      {
        datereferral: new Date(2023, 5, 9, 8, 0),
        caseid: 789,
        description: "Testing",
        scamtype: "Job scam",
        assignee: "Bob",
        status: CASE_STATUS_ENUM.PENDING,
      },
      {
        datereferral: new Date(2023, 5, 8, 17, 0),
        caseid: 445,
        description: "Testing again testing again testing again",
        scamtype: "Parcel scam",
        assignee: "Adam",
        status: CASE_STATUS_ENUM.PENDING,
      },
    ];
    data.sort((a, b) => {
      return b.datereferral.getTime() - a.datereferral.getTime();
    });
    setCaseData(data);
  }, []);

  return (
    <Container style={{ marginTop: 20 }}>
      <Container>
        <h2 style={{ textAlign: "center" }}>Case Management Dashboard</h2>
      </Container>
      <Container style={{ marginTop: 10 }}>
        <CaseStatistics caseData={caseData} />
      </Container>
      <Container style={{ marginTop: 15 }}>
        <CaseTools
          filteredCaseStatus={filteredCaseStatus}
          setFilteredCaseStatus={setFilteredCaseStatus}
        />
      </Container>
      <Container style={{ marginTop: 15 }}>
        <CaseTable
          caseData={caseData}
          filteredCaseStatus={filteredCaseStatus}
        />
      </Container>
    </Container>
  );
};
