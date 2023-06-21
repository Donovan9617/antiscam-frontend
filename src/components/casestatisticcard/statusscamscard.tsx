import { Card } from "react-bootstrap";
import { CASE_STATUS_ENUM } from "../../config";
import { CaseDataType1 } from "../../types/types";

interface StatusScamCard {
  caseData: CaseDataType1[];
}

export const StatusScamsCard: React.FC<StatusScamCard> = ({
  caseData,
}: StatusScamCard) => {
  const activatedCases = caseData.filter(
    (caseDataItem) => caseDataItem.status === CASE_STATUS_ENUM.ACTIVATED
  );
  const pendingactivationCases = caseData.filter(
    (caseDataItem) => caseDataItem.status === CASE_STATUS_ENUM.PENDING
  );
  const rejectedCases = caseData.filter(
    (caseDataItem) => caseDataItem.status === CASE_STATUS_ENUM.REJECTED
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
