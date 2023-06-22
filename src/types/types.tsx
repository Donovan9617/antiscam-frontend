export type NavItemType = "dashboard" | "second";

export type CaseStatusType = "None" | "Activated" | "Pending" | "Rejected";

export type FilteredCaseStatusType =
  | "none"
  | "activated"
  | "pending"
  | "rejected";

export type CaseScamTypeType =
  | "Job Scam"
  | "Investment Scam"
  | "Love Scam"
  | "E-Commerce Scam"
  | "Lottery Scam"
  | "Parcel Scam"
  | "Others";

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
  accountbank: string;
  accountnumber: string;
  amountscammed: number;
  assignee: string;
  status: CaseStatusType;
  description: string;
}
