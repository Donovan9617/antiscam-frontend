import { Col, Container, Row } from "react-bootstrap";
import { CaseInfoDataType } from "../../../types/types";

interface CaseInfoGridProps {
  caseInformation: CaseInfoDataType | undefined;
}

export const CaseInfoGrid: React.FC<CaseInfoGridProps> = ({
  caseInformation,
}: CaseInfoGridProps) => {
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
        <Col>
          <h6>Assignee:</h6>
          <p>{caseInformation && caseInformation.assignee}</p>
        </Col>
        <Col>
          <h6>Status:</h6>
          <p>{caseInformation && caseInformation.status}</p>
        </Col>
      </Row>
      <Row className="mb-4">
        <h6>Case Description:</h6>
        <p>{caseInformation && caseInformation.description}</p>
      </Row>
    </Container>
  );
};
