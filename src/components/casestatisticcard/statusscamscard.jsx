import { Card } from "react-bootstrap";
import { CASE_STATUS } from "../../config";

export const StatusScamsCard = ({ caseData }) => {
  const activatedCases = caseData.filter(
    (caseDataItem) => caseDataItem.status === CASE_STATUS.ACTIVATED
  );
  const pendingactivationCases = caseData.filter(
    (caseDataItem) => caseDataItem.status === CASE_STATUS.PENDING
  );
  const rejectedCases = caseData.filter(
    (caseDataItem) => caseDataItem.status === CASE_STATUS.REJECTED
  );
  return (
    <Card
      border="primary"
      style={{ width: "18rem", marginRight: 20, marginTop: 20 }}
    >
      <Card.Body>
        <Card.Title>Total Case Status</Card.Title>
        <Card.Text>
          Activated: {activatedCases.length}
          <br />
          Pending: {pendingactivationCases.length}
          <br />
          Rejected: {rejectedCases.length}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
