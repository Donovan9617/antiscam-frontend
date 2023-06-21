import { Container, Row } from "react-bootstrap";
import { CaseDataDashboardType } from "../../../types/types";
import { MostFrequentScamCard } from "./casestatisticcard/mostfrequentscamcard";
import { StatusScamsCard } from "./casestatisticcard/statusscamscard";

interface CaseStatisticsProps {
  caseData: CaseDataDashboardType[];
}

export const CaseStatistics: React.FC<CaseStatisticsProps> = ({
  caseData,
}: CaseStatisticsProps) => {
  return (
    <Container>
      <Row>
        <StatusScamsCard caseData={caseData} />
        <MostFrequentScamCard caseData={caseData} />
      </Row>
    </Container>
  );
};
