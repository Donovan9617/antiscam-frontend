import { Container, Row } from "react-bootstrap";
import { CaseDataDashboardType } from "../../types/types";
import { MostFrequentScamCard } from "../casestatisticcard/mostfrequentscamcard";
import { TotalCaseStatusCard } from "../casestatisticcard/totalcasestatuscard";

interface CaseStatisticsProps {
  caseData: CaseDataDashboardType[] | undefined;
}

export const CaseStatistics: React.FC<CaseStatisticsProps> = ({
  caseData,
}: CaseStatisticsProps) => {
  return (
    <Container>
      <Row>
        <TotalCaseStatusCard caseData={caseData} />
        <MostFrequentScamCard caseData={caseData} />
      </Row>
    </Container>
  );
};
