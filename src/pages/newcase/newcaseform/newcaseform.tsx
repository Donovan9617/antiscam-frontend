import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const NewCaseForm: React.FC = () => {
  return (
    <Container>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Date Referral</Form.Label>
            <Form.Control type="date" placeholder="Enter date referral..." />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Phone Number..." />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Scam Type</Form.Label>
            <Form.Select>
              <option>Job Scam</option>
              <option>Love Scam</option>
              <option>Parcel Scam</option>
              <option>Others</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Account Bank</Form.Label>
            <Form.Control type="text" placeholder="Enter Account Bank..." />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Account Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Amount Number..." />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Amount Scammed (S$)</Form.Label>
            <Form.Control type="number" placeholder="Enter Amount Scammed..." />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Website URL</Form.Label>
          <Form.Control type="url" placeholder="Enter Website URL..." />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Case Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter Case Description..."
            style={{ height: "100px" }}
          />
        </Form.Group>
        <Container style={{ textAlign: "center", marginTop: "10px" }}>
          <Button variant="primary" type="submit">
            Activate Case
          </Button>
        </Container>
      </Form>
    </Container>
  );
};
