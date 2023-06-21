import { Container, Row } from "react-bootstrap";
import { MostFrequentScamCard } from "../../../components/casestatisticcard/mostfrequentscamcard";
import { StatusScamsCard } from "../../../components/casestatisticcard/statusscamscard";
import { CaseDataType1 } from "../../../types/types";

interface CaseStatisticsProps {
  caseData: CaseDataType1[];
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
