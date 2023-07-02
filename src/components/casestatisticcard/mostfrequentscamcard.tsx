import { Card } from "react-bootstrap";
import { CaseDataDashboardType } from "../../types/types";

interface MostPopularScamCardProps {
  caseData: CaseDataDashboardType[] | undefined;
}

export const MostFrequentScamCard: React.FC<MostPopularScamCardProps> = ({
  caseData,
}: MostPopularScamCardProps) => {
  // Count the occurrences of each scam type
  const scamTypeCounts: { [key: string]: number } = {};
  caseData &&
    caseData.forEach((caseDataItem) => {
      const scamType = caseDataItem.scamtype;
      if (scamTypeCounts[scamType]) {
        scamTypeCounts[scamType] += 1;
      } else {
        scamTypeCounts[scamType] = 1;
      }
    });

  // Find the scam type with the highest count
  let mostPopularScamType = "";
  let highestCount = 0;
  for (const scamType in scamTypeCounts) {
    if (scamTypeCounts[scamType] > highestCount) {
      highestCount = scamTypeCounts[scamType];
      mostPopularScamType = scamType;
    }
  }
  return (
    <Card
      border="primary"
      className="mt-4"
      style={{ width: "18rem", marginRight: 20 }}
    >
      <Card.Body>
        <Card.Title>Most Popular Scam</Card.Title>
        <Card.Text>{mostPopularScamType}</Card.Text>
      </Card.Body>
    </Card>
  );
};
