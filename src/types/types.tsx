export type NavItemType = "dashboard" | "second";

export type CaseStatusType = "None" | "Activated" | "Pending" | "Rejected";

export type FilteredCaseStatusType =
  | "none"
  | "activated"
  | "pending"
  | "rejected";

export interface CaseDataType1 {
  datereferral: Date;
  caseid: number;
  description: string;
  scamtype: string;
  assignee: string;
  status: CaseStatusType;
}

export interface CaseInfoDataType {
  caseid: number;
  datereferral: Date;
  phonenumber: number;
  scamtype: string;
  accountbank: string;
  accountnumber: string;
  amountscammed: number;
  description: string;
}
