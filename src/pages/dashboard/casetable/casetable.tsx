import React, { useEffect, useState } from "react";
import { Image, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import sort from "../../../assets/svgs/sort.svg";
import {
  CASE_STATUS_ENUM,
  FILTERED_CASE_STATUS_ENUM,
} from "../../../types/enums";
import {
  CaseDataDashboardType,
  FilteredCaseDate,
  FilteredCaseStatusType,
} from "../../../types/types";
import { CaseActivationButton } from "./casebutton/caseactivationbutton";
import { CaseRejectedButton } from "./casebutton/caserejectedbutton";

interface CaseTableProps {
  caseData: CaseDataDashboardType[];
  filteredCaseStatus: FilteredCaseStatusType;
  searchedCaseDescription: string;
  filteredCaseDate: FilteredCaseDate;
}

export const CaseTable: React.FC<CaseTableProps> = ({
  caseData,
  filteredCaseStatus,
  searchedCaseDescription,
  filteredCaseDate,
}: CaseTableProps) => {
  const [caseDataToShow, setCaseDataToShow] = useState<
    CaseDataDashboardType[] | undefined
  >([]);
  const [isDateReferralChronological, setIsDateReferralChronological] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const caseTableStyle: React.CSSProperties = { textAlign: "center" };
  const caseTableDataStyle: React.CSSProperties = {
    maxWidth: "150px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };

  const handleSortDateReferral: () => void = () => {
    setIsDateReferralChronological(!isDateReferralChronological);
    caseDataToShow?.sort((a, b) => {
      return isDateReferralChronological
        ? b.datereferral.getTime() - a.datereferral.getTime()
        : a.datereferral.getTime() - b.datereferral.getTime();
    });
    setCaseDataToShow(caseDataToShow);
  };

  const handleViewCaseInfo: (caseid: string) => void = (caseid) => {
    return navigate(`/case/${caseid}`);
  };

  useEffect(() => {
    let filteredCaseStatusData: CaseDataDashboardType[] = [];
    switch (filteredCaseStatus) {
      case FILTERED_CASE_STATUS_ENUM.ACTIVATED:
        filteredCaseStatusData = caseData.filter(
          (caseItem) => caseItem.status === CASE_STATUS_ENUM.ACTIVATED
        );
        break;
      case FILTERED_CASE_STATUS_ENUM.PENDING:
        filteredCaseStatusData = caseData.filter(
          (caseItem) => caseItem.status === CASE_STATUS_ENUM.PENDING
        );
        break;
      case FILTERED_CASE_STATUS_ENUM.REJECTED:
        filteredCaseStatusData = caseData.filter(
          (caseItem) => caseItem.status === CASE_STATUS_ENUM.REJECTED
        );
        break;
      case FILTERED_CASE_STATUS_ENUM.NONE:
        filteredCaseStatusData = caseData;
        break;
      default:
        break;
    }

    const searchedCaseDescriptionData: CaseDataDashboardType[] =
      filteredCaseStatusData.filter((caseItem) => {
        return caseItem.description.includes(searchedCaseDescription);
      });

    let filteredCaseDateData: CaseDataDashboardType[] =
      searchedCaseDescriptionData;

    if (filteredCaseDate.startDate && filteredCaseDate.endDate) {
      const startDateTime = new Date(filteredCaseDate.startDate).setHours(
        0,
        0,
        0,
        0
      );
      const endDateTime = new Date(filteredCaseDate.endDate).setHours(
        23,
        59,
        59,
        999
      );

      filteredCaseDateData = searchedCaseDescriptionData.filter((caseItem) => {
        const caseItemDateTime = caseItem.datereferral.getTime();
        return (
          caseItemDateTime >= startDateTime && caseItemDateTime <= endDateTime
        );
      });
    }

    setCaseDataToShow(filteredCaseDateData);
  }, [caseData, filteredCaseStatus, searchedCaseDescription, filteredCaseDate]);

  return (
    <div style={caseTableStyle}>
      <Table bordered responsive>
        <thead>
          <tr style={{ backgroundColor: "#d0d0d0" }}>
            <th style={{ width: "15%" }}>
              <div
                style={{ cursor: "pointer" }}
                onClick={handleSortDateReferral}
              >
                Date Referral{" "}
                <Image src={sort} alt="sort" style={{ width: "10px" }} />
              </div>
            </th>
            <th style={{ width: "10%" }}>Case ID</th>
            <th style={{ width: "20%" }}>Description</th>
            <th style={{ width: "15%" }}>Scam Type</th>
            <th style={{ width: "15%" }}>Assignee</th>
            <th style={{ width: "10%" }}>Status</th>
            <th style={{ width: "15%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {caseDataToShow &&
            (caseDataToShow.length > 0 ? (
              caseDataToShow.map((caseDataItem) => (
                <tr key={caseDataItem.caseid}>
                  <td
                    style={{
                      ...caseTableDataStyle,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                    onClick={() => handleViewCaseInfo(caseDataItem.caseid)}
                  >
                    <u>
                      {" "}
                      {caseDataItem.datereferral.toLocaleString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                      ,{" "}
                      {caseDataItem.datereferral.toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                      })}
                    </u>
                  </td>
                  <td style={{ ...caseTableDataStyle, whiteSpace: "nowrap" }}>
                    {caseDataItem.caseid}
                  </td>
                  <td style={{ ...caseTableDataStyle, whiteSpace: "nowrap" }}>
                    {caseDataItem.description}
                  </td>
                  <td style={{ ...caseTableDataStyle, whiteSpace: "nowrap" }}>
                    {caseDataItem.scamtype}
                  </td>
                  <td style={{ ...caseTableDataStyle, whiteSpace: "nowrap" }}>
                    {caseDataItem.assignee}
                  </td>
                  <td style={{ ...caseTableDataStyle, whiteSpace: "nowrap" }}>
                    {caseDataItem.status}
                  </td>
                  <td style={{ width: "1%" }}>
                    {caseDataItem.status === CASE_STATUS_ENUM.PENDING ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "5px",
                        }}
                      >
                        <CaseActivationButton />
                        <CaseRejectedButton />
                      </div>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr
                style={{
                  ...caseTableDataStyle,
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                <td colSpan={7}>No current cases</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
