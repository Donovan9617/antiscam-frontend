import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { CaseStatistics } from "./casestatistics/casestatistics";
import { CaseTable } from "./casetable/casetable";

export const Dashboard = () => {
  const [caseData, setCaseData] = useState([]);

  useEffect(() => {
    // API call to obtain the backend data in JSON
    const data = [
      {
        caseid: 123,
        description: "Testing",
        datereferral: "9:00pm",
        scamtype: "Job scam",
        assignee: "Tom",
        status: "Activated",
      },
      {
        caseid: 456,
        description: "Testing again",
        datereferral: "10:00pm",
        scamtype: "Investment scam",
        assignee: "John",
        status: "Activated",
      },
      {
        caseid: 789,
        description: "Testing",
        datereferral: "2:00pm",
        scamtype: "Job scam",
        assignee: "Bob",
        status: "Pending",
      },
      {
        caseid: 445,
        description: "Testing again",
        datereferral: "5:00pm",
        scamtype: "Parcel scam",
        assignee: "Adam",
        status: "Rejected",
      },
    ];
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
      <Container style={{ marginTop: 30 }}>
        <CaseTable caseData={caseData} />
      </Container>
    </Container>
  );
};
