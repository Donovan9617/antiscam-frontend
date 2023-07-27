import {
  CaseDataDashboardType,
  CaseInfoDataType,
  CaseStatusType,
} from "../types/types";

export const getAllCases = async () => {
  try {
    // Endpoint not configured
    const response = await fetch("/api/cases");
    if (!response.ok) {
      throw new Error("Failed to fetch cases");
    }
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData as CaseDataDashboardType[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCaseInfo = async (caseid: string) => {
  try {
    // Endpoint not configured
    const response = await fetch(`/api/cases/${caseid}`);
    if (!response.ok) {
      throw new Error("Failed to fetch case information");
    }
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData as CaseInfoDataType;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const createNewCase = async (data: CaseInfoDataType) => {
  try {
    // Endpoint not configured
    const response = await fetch("/api/cases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to save case information");
    }
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData as CaseInfoDataType;
  } catch (error) {
    console.log("Error occurred during case creation:", error);
    return {};
  }
};

export const editCaseInfo = async (data: CaseInfoDataType) => {
  try {
    // Endpoint not configured
    const response = await fetch(`/api/cases/${data.caseid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to save case information");
    }
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData as CaseInfoDataType;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const editDashboardStatusCase = async (
  data: CaseDataDashboardType,
  status: CaseStatusType
) => {
  try {
    data.status = status;
    console.log(status);
    // Endpoint not configured
    const response = await fetch(`/api/cases/${data.caseid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to save case information");
    }
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData as CaseDataDashboardType;
  } catch (error) {
    console.log(error);
    return {};
  }
};
