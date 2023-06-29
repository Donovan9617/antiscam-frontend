import { Formik } from "formik";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CASE_FORM_SCHEMA } from "../../../types/enums";
import {
  BankAccountType,
  CaseInfoDataType,
  CaseInfoEditFormValuesProps,
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

  const saveCaseInformation: (values: CaseInfoEditFormValuesProps) => void = (
    values
  ) => {
    const updatedCaseInformation: CaseInfoDataType = {
      caseid: caseInformation?.caseid || "",
      datereferral: new Date(values.datereferral),
      scamtype: values.scamtype as CaseScamTypeType,
      bankaccount: values.bankaccount as BankAccountType,
      accountnumber: values.bankaccountnumber,
      amountscammed: values.amountscammed as number,
      phonenumber: values.phonenumber as number,
      assignee: values.assignee,
      status: values.status as CaseStatusType,
      description: values.description,
    };

    console.log(updatedCaseInformation);

    // Make an API call to backend to save the edited JSON case data
    //   try {
    //     const response = await fetch("your-api-endpoint", {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(updatedCaseInformation),
    //     });

    //     if (!response.ok) {
    //       throw new Error("Failed to save case information");
    //     }
    //     const updatedData = await response.json();
    //     setEditedCaseInformation(updatedData);
    //     setEditMode(false);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    setEditMode(false);
  };

  return (
    <>
      {editedCaseInformation && (
        <Container className="mt-5">
          <Formik
            validationSchema={CASE_FORM_SCHEMA}
            onSubmit={saveCaseInformation}
            initialValues={{
              datereferral: editedCaseInformation.datereferral
                .toISOString()
                .slice(0, 10),
              scamtype: editedCaseInformation.scamtype,
              bankaccount: editedCaseInformation.bankaccount,
              bankaccountnumber: editedCaseInformation.accountnumber,
              amountscammed: editedCaseInformation.amountscammed,
              phonenumber: editedCaseInformation.phonenumber,
              assignee: editedCaseInformation.assignee,
              status: editedCaseInformation.status,
              description: editedCaseInformation.description,
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row>
                  <Form.Group as={Col} className="mb-3" md="4">
                    <Form.Label>Date Referral</Form.Label>
                    <Form.Control
                      type="Date"
                      name="datereferral"
                      value={values.datereferral.toString().slice(0, 10)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.datereferral && touched.datereferral}
                    />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3" md="4">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Phone Number..."
                      name="phonenumber"
                      value={values.phonenumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.phonenumber && touched.bankaccount}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phonenumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3" md="4">
                    <Form.Label>Scam Type</Form.Label>
                    <Form.Select
                      name="scamtype"
                      value={values.scamtype}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.scamtype && touched.scamtype}
                    >
                      <option value="">Select Scam Type...</option>
                      <option value="Job Scam">Job Scam</option>
                      <option value="Investment Scam">Investment Scam</option>
                      <option value="Love Scam">Love Scam</option>
                      <option value="E-Commerce Scam">E-Commerce Scam</option>
                      <option value="Lottery Scam">Lottery Scam</option>
                      <option value="Parcel Scam">Parcel Scam</option>
                      <option value="Tech Support Scam">
                        Tech Support Scam
                      </option>
                      <option value="Phishing Scam">Phishing Scam</option>
                      <option value="Identity Theft">Identity Theft</option>
                      <option value="Credit Card Scam">Credit Card Scam</option>
                      <option value="Others">Others</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.scamtype}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} className="mb-3" md="4">
                    <Form.Label>Bank Account</Form.Label>
                    <Form.Select
                      name="bankaccount"
                      value={values.bankaccount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.bankaccount && touched.bankaccount}
                    >
                      <option value="">Select Bank Account...</option>
                      <option>DBS</option>
                      <option>OCBC</option>
                      <option>UOB</option>
                      <option>Standard Chartered</option>
                      <option>Citibank</option>
                      <option>HSBC</option>
                      <option>Maybank</option>
                      <option>Bank of China</option>
                      <option>CIMB</option>
                      <option>Bank of America</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.bankaccount}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3" md="4">
                    <Form.Label>Bank Account Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="bankaccountnumber"
                      value={values.bankaccountnumber}
                      placeholder="Enter Bank Amount Number..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={
                        !!errors.bankaccountnumber && touched.bankaccount
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.bankaccountnumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3" md="4">
                    <Form.Label>Amount Scammed (S$)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Amount Scammed..."
                      name="amountscammed"
                      value={values.amountscammed}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.amountscammed && touched.bankaccount}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.amountscammed}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} className="mb-3" md="6">
                    <Form.Label>Assignee</Form.Label>
                    <Form.Control
                      type="text"
                      name="assignee"
                      value={values.assignee}
                      placeholder="Enter Assignee Name..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.assignee && touched.bankaccount}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.assignee}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3" md="6">
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                      name="status"
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.status && touched.bankaccount}
                    >
                      <option value="">Select Case Status</option>
                      <option>Pending</option>
                      <option>Activated</option>
                      <option>Rejected</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.status}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Case Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    placeholder="Enter Case Description..."
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.description && touched.bankaccount}
                    style={{ height: "100px" }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>

                <Container
                  className="mt-10 mb-5"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Button type="submit">Save</Button>
                </Container>
              </Form>
            )}
          </Formik>
        </Container>
      )}
    </>
  );
};
