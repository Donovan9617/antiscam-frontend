import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { v4 } from "uuid";

export const NewCaseForm: React.FC = () => {
  const currentDate = new Date();
  const dateString = currentDate.toISOString().substring(0, 10);
  const caseId = v4();

  const handleCreateCase: (
    event: React.FormEvent<HTMLFormElement>
  ) => void = async (event) => {
    event.preventDefault();
    // const form = event.currentTarget;
    // try {
    //   const response = await fetch("<API_ENDPOINT_URL>", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       dateReferral: form.dateReferral.value,
    //       caseId: form.caseId.value,
    //       scamType: form.scamType.value,
    //       bankaccount: form.bankaccount.value,
    //       accountNumber: form.accountNumber.value,
    //       amountScammed: form.amountScammed.value,
    //       phoneNumber: form.phoneNumber.value,
    //       assignee: form.assignee.value,
    //       status: form.status.value,
    //       caseDescription: form.caseDescription.value,
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Failed to save case");
    //   }
    //   console.log("Case saved successfully!");
    // } catch (error) {
    //   console.error("Failed to save case:", error);
    // }
  };

  return (
    <Container>
      <Form onSubmit={handleCreateCase}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Date Referral</Form.Label>
            <Form.Control type="date" value={dateString} />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Case ID</Form.Label>
            <Form.Control type="string" value={caseId} disabled={true} />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Scam Type</Form.Label>
            <Form.Select>
              <option>Job Scam</option>
              <option>Investment Scam</option>
              <option>Love Scam</option>
              <option>E-Commerce Scam</option>
              <option>Lottery Scam</option>
              <option>Parcel Scam</option>
              <option>Tech Support Scam</option>
              <option>Phishing Scam</option>
              <option>Identity Theft</option>
              <option>Credit Card Scam</option>
              <option>Others</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Bank Account</Form.Label>
            <Form.Select>
              <option>DBS</option>
              <option>OCBC</option>
              <option>UOB</option>
              <option>Standard Chartered</option>
              <option>Citibank</option>
              <option>HSBC</option>
              <option>Maybank</option>
              <option>Bank</option>
              <option>Bank of America</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Bank Account Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Amount Number..." />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Amount Scammed (S$)</Form.Label>
            <Form.Control type="number" placeholder="Enter Amount Scammed..." />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Phone Number..." />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Assignee</Form.Label>
            <Form.Control type="text" placeholder="Enter Assignee Name..." />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Status</Form.Label>
            <Form.Select>
              <option>Pending</option>
              <option>Activated</option>
              <option>Rejected</option>
            </Form.Select>
          </Form.Group>
        </Row>
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
            + Create Case
          </Button>
        </Container>
      </Form>
    </Container>
  );
};
