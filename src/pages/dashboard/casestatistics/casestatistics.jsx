import { Container, Row } from "react-bootstrap";
import { MostFrequentScamCard } from "../../../components/casestatisticcard/mostfrequentscamcard";
import { StatusScamsCard } from "../../../components/casestatisticcard/statusscamscard";

export const CaseStatistics = ({ caseData }) => {
  return (
    <Container>
      <Row>
        <StatusScamsCard caseData={caseData} />
        <MostFrequentScamCard caseData={caseData} />
      </Row>
    </Container>
  );
};
