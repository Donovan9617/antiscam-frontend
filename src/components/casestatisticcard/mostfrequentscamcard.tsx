import { Card } from "react-bootstrap";
import { CaseDataDashboardType } from "../../types/types";

interface MostFrequentScamCardProps {
  caseData: CaseDataDashboardType[] | undefined;
}

export const MostFrequentScamCard: React.FC<MostFrequentScamCardProps> = ({
  caseData,
}: MostFrequentScamCardProps) => {
  // Count the occurrences of each scam type
  const scamTypeCounts: { [key: string]: number } = {};
  caseData?.forEach((caseDataItem) => {
    const scamType = caseDataItem.scamtype;
    if (scamTypeCounts[scamType]) {
      scamTypeCounts[scamType] += 1;
    } else {
      scamTypeCounts[scamType] = 1;
    }
  });

  // Find the scam type with the highest count
  const top3ScamTypes: { scamType: string; count: number }[] = [];
  for (const scamType in scamTypeCounts) {
    const count = scamTypeCounts[scamType];
    if (top3ScamTypes.length < 3) {
      top3ScamTypes.push({ scamType, count });
    } else {
      const lowestCountIndex = top3ScamTypes.findIndex(
        (item) => item.count < count
      );
      if (lowestCountIndex !== -1) {
        top3ScamTypes.splice(lowestCountIndex, 1, { scamType, count });
      }
    }
  }
  return (
    <Card
      border="primary"
      className="mt-4"
      style={{ width: "18rem", marginRight: 20 }}
    >
      <Card.Body>
        <Card.Title>Most Frequent Scams</Card.Title>

        <Card.Text>
          {top3ScamTypes.map((item, index) => {
            return (
              <>
                {`${index + 1}. ${item.scamType} (${item.count} ${
                  item.count === 1 ? "case" : "cases"
                })`}
                <br />
              </>
            );
          })}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
