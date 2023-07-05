import { Col, Container, Row } from "react-bootstrap";
import { FundFlowChart } from "../../components/charts/fundflowchart";
import { FundRecoveryChart } from "../../components/charts/fundrecoverychart";
import { TypologyRecoveryChart } from "../../components/charts/typologyrecoverychart";

export const Charts: React.FC = () => {
  return (
    <Container className="mt-4">
      <Container>
        <h2 style={{ textAlign: "center" }}>Scam Charts</h2>
      </Container>
      <Container>
        <Row>
          <Col sm={4}>
            <FundFlowChart />
          </Col>
          <Col sm={4}>
            <TypologyRecoveryChart />
          </Col>
          <Col sm={4}>
            <FundRecoveryChart />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
