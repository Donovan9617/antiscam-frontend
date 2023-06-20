import { Col, Container, Row } from "react-bootstrap";

export const CaseInfoGrid = ({ caseInformation }) => {
  return (
    <Container style={{ marginTop: "30px" }}>
      <Row className="mb-4">
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
          <h6>Phone Number:</h6>
          <p>{caseInformation && caseInformation.phonenumber}</p>
        </Col>
        <Col>
          <h6>Scam Type:</h6>
          <p>{caseInformation && caseInformation.scamtype}</p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h6>Account Bank:</h6>
          <p>{caseInformation && caseInformation.accountbank}</p>
        </Col>
        <Col>
          <h6>Account Number:</h6>
          <p>{caseInformation && caseInformation.accountnumber}</p>
        </Col>
        <Col>
          <h6>Amount Scammed (S$):</h6>
          <p>{caseInformation && caseInformation.amountscammed}</p>
        </Col>
      </Row>
      <Row className="mb-4">
        <h6>Case Description:</h6>
        <p>{caseInformation && caseInformation.description}</p>
      </Row>
    </Container>
  );
};
