export type NavItemType = "dashboard" | "charts";

export type CaseStatusType =
  | ""
  | "None"
  | "Activated"
  | "Pending"
  | "Rejected"
  | "Closed";

export type FilteredCaseStatusType =
  | "none"
  | "activated"
  | "pending"
  | "rejected"
  | "closed";

export type CaseDateType = "New to Old" | "Old to New";

export type SortCaseDateType = "newtoold" | "oldtonew";

export type CaseDescription = "";

export interface FilteredCaseDateType {
  startDate: string;
  endDate: string;
}

export interface FilterContextValuesType {
  filteredCaseStatus: FilteredCaseStatusType;
  searchedCaseDescription: string;
  filteredCaseDate: FilteredCaseDateType;
  sortedCaseDate: SortCaseDateType;
  setFilteredCaseStatus: React.Dispatch<
    React.SetStateAction<FilteredCaseStatusType>
  >;
  setSearchedCaseDescription: React.Dispatch<React.SetStateAction<string>>;
  setFilteredCaseDate: React.Dispatch<
    React.SetStateAction<FilteredCaseDateType>
  >;
  setSortedCaseDate: React.Dispatch<React.SetStateAction<SortCaseDateType>>;
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
  casefile?: File;
}

export interface NewCaseFormValuesType extends CaseInfoDataType {}

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
  casefile?: File;
}

export interface NewCaseFormValuesProps extends CaseInfoEditFormValuesProps {
  caseid: string;
}
