export type NavItemType = "dashboard" | "second";

export type CaseStatusType = "" | "None" | "Activated" | "Pending" | "Rejected";

export type FilteredCaseStatusType =
  | "none"
  | "activated"
  | "pending"
  | "rejected";

export type CaseDateType = "New to Old" | "Old to New";

export type SortCaseDateType = "newtoold" | "oldtonew";

export interface FilteredCaseDateType {
  startDate: string;
  endDate: string;
}

export type CaseScamTypeType =
  | ""
  | "Job Scam"
  | "Investment Scam"
  | "Love Scam"
  | "E-Commerce Scam"
  | "Lottery Scam"
  | "Parcel Scam"
  | "Tech Support Scam"
  | "Phishing Scam"
  | "Identity Theft"
  | "Credit Card Scam"
  | "Others";

export type BankAccountType =
  | ""
  | "DBS"
  | "OCBC"
  | "UOB"
  | "Standard Chartered"
  | "Citibank"
  | "HSBC"
  | "Maybank"
  | "Bank of China"
  | "CIMB"
  | "Bank of America";

export interface CaseDataDashboardType {
  datereferral: Date;
  caseid: string;
  description: string;
  scamtype: CaseScamTypeType;
  assignee: string;
  status: CaseStatusType;
}

export interface NewCaseFormValuesType extends CaseInfoDataType {}

export interface CaseInfoDataType {
  caseid: string;
  datereferral: Date;
  phonenumber: number;
  scamtype: CaseScamTypeType;
  bankaccount: BankAccountType;
  accountnumber: string;
  amountscammed: number;
  assignee: string;
  status: CaseStatusType;
  description: string;
}

export interface CaseInfoEditFormValuesProps {
  datereferral: string;
  scamtype: string;
  bankaccount: string;
  bankaccountnumber: string;
  amountscammed: number;
  phonenumber: number;
  assignee: string;
  status: string;
  description: string;
}

export interface NewCaseFormValuesProps extends CaseInfoEditFormValuesProps {
  caseid: string;
}
