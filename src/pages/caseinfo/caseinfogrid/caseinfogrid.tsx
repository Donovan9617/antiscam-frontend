import { Col, Container, Row } from "react-bootstrap";
import { CaseInfoDataType } from "../../../types/types";

interface CaseInfoGridProps {
  caseInformation: CaseInfoDataType | undefined;
}

export const CaseInfoGrid: React.FC<CaseInfoGridProps> = ({
  caseInformation,
}: CaseInfoGridProps) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="mb-4" md="4">
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
        <Col className="mb-4" md="4">
          <h6>Phone Number:</h6>
          <p>{caseInformation && caseInformation.phonenumber}</p>
        </Col>
        <Col className="mb-4" md="4">
          <h6>Scam Type:</h6>
          <p>{caseInformation && caseInformation.scamtype}</p>
        </Col>
      </Row>
      <Row>
        <Col className="mb-4" md="4">
          <h6>Bank Account:</h6>
          <p>{caseInformation && caseInformation.bankaccount}</p>
        </Col>
        <Col className="mb-4" md="4">
          <h6>Bank Account Number:</h6>
          <p>{caseInformation && caseInformation.accountnumber}</p>
        </Col>
        <Col className="mb-4" md="4">
          <h6>Amount Scammed (S$):</h6>
          <p>{caseInformation && caseInformation.amountscammed}</p>
        </Col>
      </Row>
      <Row>
        <Col className="mb-4" md="4">
          <h6>Assignee:</h6>
          <p>{caseInformation && caseInformation.assignee}</p>
        </Col>
        <Col className="mb-4" md="4">
          <h6>Status:</h6>
          <p>{caseInformation && caseInformation.status}</p>
        </Col>
        <Col className="mb-4" md="4">
          <h6>Case File (Optional):</h6>
          {caseInformation && caseInformation.casefile ? (
            <div>
              <a
                href={URL.createObjectURL(caseInformation.casefile)}
                download={caseInformation.casefile.name}
                style={{ color: "black" }}
              >
                {caseInformation.casefile.name}
              </a>
            </div>
          ) : (
            "No uploaded file"
          )}
        </Col>
      </Row>
      <Row>
        <h6>Case Description:</h6>
        <p>{caseInformation && caseInformation.description}</p>
      </Row>
    </Container>
  );
};
