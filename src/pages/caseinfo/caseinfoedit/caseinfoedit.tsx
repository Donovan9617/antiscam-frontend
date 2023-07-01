import { Formik } from "formik";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  BANK_ACCOUNT_ENUM,
  CASE_FORM_SCHEMA,
  CASE_SCAMTYPE_ENUM,
  CASE_STATUS_ENUM,
} from "../../../types/enums";
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
      casefile: values.casefile,
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
              casefile: editedCaseInformation.casefile,
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              setFieldValue,
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
                      <option value={CASE_SCAMTYPE_ENUM.NONE}>
                        Select Scam Type...
                      </option>
                      <option value={CASE_SCAMTYPE_ENUM.JOB_SCAM}>
                        Job Scam
                      </option>
                      <option value={CASE_SCAMTYPE_ENUM.INVESTMENT_SCAM}>
                        Investment Scam
                      </option>
                      <option value={CASE_SCAMTYPE_ENUM.LOVE_SCAM}>
                        Love Scam
                      </option>
                      <option value={CASE_SCAMTYPE_ENUM.ECOMMERCE_SCAM}>
                        E-Commerce Scam
                      </option>
                      <option value={CASE_SCAMTYPE_ENUM.LOTTERY_SCAM}>
                        Lottery Scam
                      </option>
                      <option value={CASE_SCAMTYPE_ENUM.PARCEL_SCAM}>
                        Parcel Scam
                      </option>
                      <option value={CASE_SCAMTYPE_ENUM.TECH_SUPPORT_SCAM}>
                        Tech Support Scam
                      </option>
                      <option value={CASE_SCAMTYPE_ENUM.PHISHING_SCAM}>
                        Phishing Scam
                      </option>
                      <option value={CASE_SCAMTYPE_ENUM.IDENTITY_THEFT}>
                        Identity Theft
                      </option>
                      <option value={CASE_SCAMTYPE_ENUM.CREDIT_CARD_SCAM}>
                        Credit Card Scam
                      </option>
                      <option value={CASE_SCAMTYPE_ENUM.OTHERS}>Others</option>
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
                      <option value={BANK_ACCOUNT_ENUM.NONE}>
                        Select Bank Account...
                      </option>
                      <option value={BANK_ACCOUNT_ENUM.DBS}>DBS</option>
                      <option value={BANK_ACCOUNT_ENUM.OCBC}>OCBC</option>
                      <option value={BANK_ACCOUNT_ENUM.UOB}>UOB</option>
                      <option value={BANK_ACCOUNT_ENUM.STANDARD_CHARTERED}>
                        Standard Chartered
                      </option>
                      <option value={BANK_ACCOUNT_ENUM.CITIBANK}>
                        Citibank
                      </option>
                      <option value={BANK_ACCOUNT_ENUM.HSBC}>HSBC</option>
                      <option value={BANK_ACCOUNT_ENUM.MAYBANK}>Maybank</option>
                      <option value={BANK_ACCOUNT_ENUM.BANK_OF_CHINA}>
                        Bank of China
                      </option>
                      <option value={BANK_ACCOUNT_ENUM.CIMB}>CIMB</option>
                      <option value={BANK_ACCOUNT_ENUM.BANK_OF_AMERICA}>
                        Bank of America
                      </option>
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
                  <Form.Group as={Col} className="mb-3" md="4">
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
                  <Form.Group as={Col} className="mb-3" md="4">
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                      name="status"
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.status && touched.bankaccount}
                    >
                      <option value={CASE_STATUS_ENUM.NONE}>
                        Select Case Status
                      </option>
                      <option value={CASE_STATUS_ENUM.PENDING}>Pending</option>
                      <option value={CASE_STATUS_ENUM.ACTIVATED}>
                        Activated
                      </option>
                      <option value={CASE_STATUS_ENUM.REJECTED}>
                        Rejected
                      </option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.status}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3" md="4">
                    <Form.Label>Case File (Optional)</Form.Label>
                    <Form.Control
                      type="file"
                      name="casefile"
                      onChange={(event) => {
                        const file: File | undefined = (
                          event.currentTarget as HTMLInputElement
                        ).files?.[0];
                        setFieldValue("casefile", file);
                      }}
                      isInvalid={touched.casefile && !!errors.casefile}
                    />
                    {values.casefile ? (
                      <>
                        Currently uploaded file:{" "}
                        <a
                          href={URL.createObjectURL(values.casefile)}
                          download={values.casefile.name}
                          style={{ color: "black" }}
                        >
                          {values.casefile.name}
                        </a>{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                          onClick={() => setFieldValue("casefile", undefined)}
                          style={{ cursor: "pointer" }}
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                      </>
                    ) : (
                      "No uploaded file"
                    )}
                    <Form.Control.Feedback type="invalid">
                      {errors.casefile}
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
