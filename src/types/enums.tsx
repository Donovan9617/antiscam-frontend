export const CASE_STATUS_ENUM = {
  NONE: "None",
  ACTIVATED: "Activated",
  PENDING: "Pending",
  REJECTED: "Rejected",
} as const;

export const FILTERED_CASE_STATUS_ENUM = {
  NONE: "none",
  ACTIVATED: "activated",
  PENDING: "pending",
  REJECTED: "rejected",
} as const;

export const NAV_ITEMS_ENUM = {
  DASHBOARD: "dashboard",
  SECOND: "second",
} as const;

export const CASE_SCAMTYPE_ENUM = {
  JOB_SCAM: "Job Scam",
  INVESTMENT_SCAM: "Investment Scam",
  LOVE_SCAM: "Love Scam",
  ECOMMERCE_SCAM: "E-Commerce Scam",
  LOTTERY_SCAM: "Lottery Scam",
  PARCEL_SCAM: "Parcel Scam",
  OTHERS: "Others",
} as const;
