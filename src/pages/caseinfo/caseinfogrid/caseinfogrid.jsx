import { Col, Container, Row } from "react-bootstrap";

export const CaseInfoGrid = ({ caseInformation }) => {
  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col>
          <h6>Case ID:</h6>
          <p>{caseInformation && caseInformation.caseid}</p>
        </Col>
        <Col>
          <h6>Date Referral:</h6>
          <p>
            {" "}
            {caseInformation &&
              caseInformation.datereferral.toLocaleString("en-US", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            ,{" "}
            {caseInformation &&
              caseInformation.datereferral.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
              })}
          </p>
        </Col>
        <Col>
          <h6>Scam Type:</h6>
          <p>{caseInformation && caseInformation.scamtype}</p>
        </Col>
      </Row>
    </Container>
  );
};
