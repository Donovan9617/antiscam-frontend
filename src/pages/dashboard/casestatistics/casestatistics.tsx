import { Container, Row } from "react-bootstrap";
import { MostFrequentScamCard } from "../../../components/casestatisticcard/mostfrequentscamcard";
import { TotalCaseStatusCard } from "../../../components/casestatisticcard/totalcasestatuscard";
import { CaseDataDashboardType } from "../../../types/types";

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
