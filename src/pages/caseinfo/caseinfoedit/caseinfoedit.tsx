import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  BankAccountType,
  CaseInfoDataType,
  CaseScamTypeType,
  CaseStatusType,
} from "../../../types/types";

interface CaseInfoEditProps {
  caseInformation: CaseInfoDataType | undefined;
  setEditMode: (editMode: boolean) => void;
}

export const CaseInfoEdit: React.FC<CaseInfoEditProps> = ({
  caseInformation,
  setEditMode,
}: CaseInfoEditProps) => {
  const [editedCaseInformation, setEditedCaseInformation] = useState<
    CaseInfoDataType | undefined
  >(caseInformation);

  const saveCaseInformation: () => void = () => {
    // Make an API call to backend to save the edited JSON
    console.log("Saved case information", editedCaseInformation);
    setEditMode(false);
  };

  return (
    <>
      {editedCaseInformation && (
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
                    .substring(0, 10)}
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
                      phonenumber: parseInt(e.target.value, 10),
                    });
                  }}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Scam Type</Form.Label>
                <Form.Select
                  defaultValue={editedCaseInformation.scamtype}
                  onChange={(e) => {
                    setEditedCaseInformation({
                      ...editedCaseInformation,
                      scamtype: e.target.value as CaseScamTypeType,
                    });
                  }}
                >
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
            <Row className="mb-4">
              <Form.Group as={Col}>
                <Form.Label>Bank Account</Form.Label>
                <Form.Select
                  defaultValue={editedCaseInformation.bankaccount}
                  onChange={(e) => {
                    setEditedCaseInformation({
                      ...editedCaseInformation,
                      bankaccount: e.target.value as BankAccountType,
                    });
                  }}
                >
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
                      amountscammed: parseFloat(e.target.value),
                    });
                  }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col}>
                <Form.Label>Assignee</Form.Label>
                <Form.Control
                  type="text"
                  name="assignee"
                  value={editedCaseInformation.assignee}
                  onChange={(e) => {
                    setEditedCaseInformation({
                      ...editedCaseInformation,
                      assignee: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Status</Form.Label>
                <Form.Select
                  defaultValue={editedCaseInformation.status}
                  onChange={(e) => {
                    setEditedCaseInformation({
                      ...editedCaseInformation,
                      status: e.target.value as CaseStatusType,
                    });
                  }}
                >
                  <option>Activated</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                </Form.Select>
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
      )}
    </>
  );
};
