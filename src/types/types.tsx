export type NavItemType = "dashboard" | "second";

export type CaseStatusType = "None" | "Activated" | "Pending" | "Rejected";

export type FilteredCaseStatusType =
  | "none"
  | "activated"
  | "pending"
  | "rejected";

export interface CaseDataDashboardType {
  datereferral: Date;
  caseid: string;
  description: string;
  scamtype: string;
  assignee: string;
  status: CaseStatusType;
}

export interface CaseInfoDataType {
  caseid: string;
  datereferral: Date;
  phonenumber: number;
  scamtype: string;
  accountbank: string;
  accountnumber: string;
  amountscammed: number;
  assignee: string;
  status: CaseStatusType;
  description: string;
}
