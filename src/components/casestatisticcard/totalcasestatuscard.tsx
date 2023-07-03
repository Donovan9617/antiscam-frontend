import { Card } from "react-bootstrap";
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
  return (
    <Card
      border="primary"
      className="mt-4"
      style={{ width: "18rem", marginRight: 20 }}
    >
      <Card.Body>
        <Card.Title>Total Case Status</Card.Title>
        <Card.Text>
          Activated: {activatedCases?.length}
          <br />
          Pending: {pendingactivationCases?.length}
          <br />
          Rejected: {rejectedCases?.length}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
