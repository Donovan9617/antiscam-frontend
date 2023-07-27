import { Card, Col, Row } from "react-bootstrap";
import { CASE_STATUS_ENUM } from "../../types/enums";
import { CaseDataDashboardType } from "../../types/types";

interface TotalCaseStatusCardProps {
  caseData: CaseDataDashboardType[] | undefined;
}

export const TotalCaseStatusCard: React.FC<TotalCaseStatusCardProps> = ({
  caseData,
}: TotalCaseStatusCardProps) => {
  const activatedCases = caseData?.filter(
    (caseDataItem) => caseDataItem.status === CASE_STATUS_ENUM.ACTIVATED
  );
  const pendingactivationCases = caseData?.filter(
    (caseDataItem) => caseDataItem.status === CASE_STATUS_ENUM.PENDING
  );
  const rejectedCases = caseData?.filter(
    (caseDataItem) => caseDataItem.status === CASE_STATUS_ENUM.REJECTED
  );
  const closedCases = caseData?.filter(
    (caseDataItem) => caseDataItem.status === CASE_STATUS_ENUM.CLOSED
  );
  return (
    <Card
      border="primary"
      className="mt-4"
      style={{ width: "18rem", marginRight: 20 }}
    >
      <Card.Body>
        <Card.Title>Total Case Status</Card.Title>
        <Card.Text>
          <Row>
            <Col>Activated: {activatedCases?.length}</Col>
            <Col>Pending: {pendingactivationCases?.length}</Col>
          </Row>
          <Row>
            <Col>Rejected: {rejectedCases?.length}</Col>
            <Col>Closed: {closedCases?.length}</Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
