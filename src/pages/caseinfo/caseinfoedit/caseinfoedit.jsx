import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const CaseInfoEdit = ({ caseInformation, setEditMode }) => {
  const [editedCaseInformation, setEditedCaseInformation] =
    useState(caseInformation);

  const saveCaseInformation = () => {
    // Make an API call to backend to save the edited JSON
    console.log("Saved case information", editedCaseInformation);
    setEditMode(false);
  };

  return (
    <Container>
      <Form>
        <Row className="mb-4">
          <Form.Group as={Col}>
            <Form.Label>Date Referral</Form.Label>
            <Form.Control
              type="date"
              name="datereferral"
              value={editedCaseInformation.datereferral
                .toISOString()
                .substr(0, 10)}
              onChange={(e) => {
                setEditedCaseInformation({
                  ...editedCaseInformation,
                  datereferral: new Date(e.target.value),
                });
              }}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              name="phonenumber"
              value={editedCaseInformation.phonenumber}
              onChange={(e) => {
                setEditedCaseInformation({
                  ...editedCaseInformation,
                  phonenumber: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Scam Type</Form.Label>
            <Form.Select value={editedCaseInformation.scamtype}>
              <option>Job Scam</option>
              <option>Love Scam</option>
              <option>Parcel Scam</option>
              <option>Others</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <Form.Group as={Col}>
            <Form.Label>Account Bank</Form.Label>
            <Form.Control
              type="text"
              name="accountbank"
              value={editedCaseInformation.accountbank}
              onChange={(e) => {
                setEditedCaseInformation({
                  ...editedCaseInformation,
                  accountbank: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Account Number</Form.Label>
            <Form.Control
              type="text"
              name="accountnumber"
              value={editedCaseInformation.accountnumber}
              onChange={(e) => {
                setEditedCaseInformation({
                  ...editedCaseInformation,
                  accountnumber: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Amount Scammed (S$)</Form.Label>
            <Form.Control
              type="number"
              name="accountscammed"
              value={editedCaseInformation.amountscammed}
              onChange={(e) => {
                setEditedCaseInformation({
                  ...editedCaseInformation,
                  amountscammed: e.target.value,
                });
              }}
            />
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <Form.Group className="mb-3">
            <Form.Label>Case Description</Form.Label>
            <Form.Control
              as="textarea"
              name="casedescription"
              value={editedCaseInformation.description}
              style={{ height: "100px" }}
              onChange={(e) => {
                setEditedCaseInformation({
                  ...editedCaseInformation,
                  description: e.target.value,
                });
              }}
            />
          </Form.Group>
        </Row>
      </Form>
      <Button onClick={saveCaseInformation}>Save</Button>
    </Container>
  );
};
