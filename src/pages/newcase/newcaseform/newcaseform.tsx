import * as formik from "formik";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { v4 } from "uuid";
import { createNewCase } from "../../../api/api";
import {
  BANK_ACCOUNT_ENUM,
  CASE_FORM_SCHEMA,
  CASE_SCAMTYPE_ENUM,
  CASE_STATUS_ENUM,
} from "../../../types/enums";
import {
  BankAccountType,
  CaseInfoDataType,
  CaseScamTypeType,
  CaseStatusType,
  NewCaseFormValuesProps,
} from "../../../types/types";

export const NewCaseForm: React.FC = () => {
  const { Formik } = formik;
  const currentDate = new Date();
  const dateString = currentDate.toISOString().substring(0, 10);
  const caseId = v4();

  const handleCreateNewCase: (values: NewCaseFormValuesProps) => void = async (
    values
  ) => {
    const data: CaseInfoDataType = {
      caseid: values.caseid,
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
    console.log(data);
    createNewCase(data);
  };

  return (
    <Container className="mt-5">
      <Formik
        validationSchema={CASE_FORM_SCHEMA}
        onSubmit={handleCreateNewCase}
        initialValues={{
          caseid: "",
          datereferral: dateString,
          scamtype: "",
          bankaccount: "",
          bankaccountnumber: "",
          amountscammed: 0,
          phonenumber: 0,
          assignee: "",
          status: "",
          description: "",
          file: undefined,
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
                <Form.Label>Case ID</Form.Label>
                <Form.Control
                  type="text"
                  name="caseId"
                  value={caseId}
                  disabled={true}
                />
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
                  <option value={CASE_SCAMTYPE_ENUM.JOB_SCAM}>Job Scam</option>
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
                  <option value={BANK_ACCOUNT_ENUM.CITIBANK}>Citibank</option>
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
                  placeholder="Enter Bank Amount Number..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.bankaccountnumber && touched.bankaccount}
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
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
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
                <Form.Label>Assignee</Form.Label>
                <Form.Control
                  type="text"
                  name="assignee"
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
                  <option value={CASE_STATUS_ENUM.ACTIVATED}>Activated</option>
                  <option value={CASE_STATUS_ENUM.REJECTED}>Rejected</option>
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

            <Form.Group className="mb-3">
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
              <Form.Control.Feedback type="invalid">
                {errors.casefile}
              </Form.Control.Feedback>
            </Form.Group>

            <Container
              className="mt-10 mb-5"
              style={{
                textAlign: "center",
              }}
            >
              <Button type="submit">+ Create Case</Button>
            </Container>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
