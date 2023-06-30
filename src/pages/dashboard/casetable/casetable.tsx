import React, { useEffect, useState } from "react";
import { Image, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import sort from "../../../assets/svgs/sort.svg";
import {
  CASE_STATUS_ENUM,
  FILTERED_CASE_STATUS_ENUM,
  SORT_CASE_DATE_ENUM,
} from "../../../types/enums";
import {
  CaseDataDashboardType,
  FilteredCaseDateType,
  FilteredCaseStatusType,
  SortCaseDateType,
} from "../../../types/types";
import { CaseActivationButton } from "./casebutton/caseactivationbutton";
import { CaseRejectedButton } from "./casebutton/caserejectedbutton";
import { CasePagination } from "./casepagination/casepagination";

interface CaseTableProps {
  caseData: CaseDataDashboardType[];
  filteredCaseStatus: FilteredCaseStatusType;
  searchedCaseDescription: string;
  filteredCaseDate: FilteredCaseDateType;
  sortedCaseDate: SortCaseDateType;
}

export const CaseTable: React.FC<CaseTableProps> = ({
  caseData,
  filteredCaseStatus,
  searchedCaseDescription,
  filteredCaseDate,
  sortedCaseDate,
}: CaseTableProps) => {
  const [caseDataToShow, setCaseDataToShow] = useState<
    CaseDataDashboardType[] | undefined
  >([]);
  const [isDateReferralChronological, setIsDateReferralChronological] =
    useState<boolean>(false);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 10;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const caseTableStyle: React.CSSProperties = { textAlign: "center" };
  const caseTableHeaderRowStyle: React.CSSProperties = {
    backgroundColor: "#d0d0d0",
  };
  const caseTableDataStyle: React.CSSProperties = {
    maxWidth: "150px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };
  const caseTableActionDataStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "5px",
  };

  const handleViewCaseInfo: (caseid: string) => void = (caseid) => {
    return navigate(`/case/${caseid}`);
  };

  const formatDateReferral: (datereferral: Date) => string = (datereferral) => {
    return (
      datereferral.toLocaleString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }) +
      ", " +
      datereferral.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
      })
    );
  };

  useEffect(() => {
    // Filter
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
    let filteredCaseDateData: CaseDataDashboardType[] = filteredCaseStatusData;
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

      filteredCaseDateData = filteredCaseDateData.filter((caseItem) => {
        const caseItemDateTime = caseItem.datereferral.getTime();
        return (
          caseItemDateTime >= startDateTime && caseItemDateTime <= endDateTime
        );
      });
    }
    // Search
    const searchedCaseDescriptionData: CaseDataDashboardType[] =
      filteredCaseDateData.filter((caseItem) => {
        return caseItem.description.includes(searchedCaseDescription);
      });
    // Sort
    const sortedCaseDateData: CaseDataDashboardType[] =
      searchedCaseDescriptionData;
    switch (sortedCaseDate) {
      case SORT_CASE_DATE_ENUM.NEW_TO_OLD:
        sortedCaseDateData.sort((a, b) => {
          return b.datereferral.getTime() - a.datereferral.getTime();
        });
        break;
      case SORT_CASE_DATE_ENUM.OLD_TO_NEW:
        sortedCaseDateData.sort((a, b) => {
          return a.datereferral.getTime() - b.datereferral.getTime();
        });
        break;
      default:
        break;
    }

    setCaseDataToShow(sortedCaseDateData);
  }, [
    caseData,
    filteredCaseStatus,
    searchedCaseDescription,
    filteredCaseDate,
    sortedCaseDate,
  ]);

  return (
    <div style={caseTableStyle}>
      <Table bordered responsive>
        <thead>
          <tr style={caseTableHeaderRowStyle}>
            <th style={{ width: "15%" }}>
              <div style={{ cursor: "pointer" }}>
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
              caseDataToShow.slice(startIndex, endIndex).map((caseDataItem) => (
                <tr key={caseDataItem.caseid}>
                  <td style={{ ...caseTableDataStyle }}>
                    {formatDateReferral(caseDataItem.datereferral)}
                  </td>
                  <td
                    style={{
                      ...caseTableDataStyle,
                      cursor: "pointer",
                    }}
                    onClick={() => handleViewCaseInfo(caseDataItem.caseid)}
                  >
                    <u>{caseDataItem.caseid}</u>
                  </td>
                  <td style={{ ...caseTableDataStyle }}>
                    {caseDataItem.description}
                  </td>
                  <td style={{ ...caseTableDataStyle }}>
                    {caseDataItem.scamtype}
                  </td>
                  <td style={{ ...caseTableDataStyle }}>
                    {caseDataItem.assignee}
                  </td>
                  <td style={{ ...caseTableDataStyle }}>
                    {caseDataItem.status}
                  </td>
                  <td style={{ width: "1%" }}>
                    {caseDataItem.status === CASE_STATUS_ENUM.PENDING ? (
                      <div style={caseTableActionDataStyle}>
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
                  textAlign: "center",
                }}
              >
                <td colSpan={7}>No current cases</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <CasePagination
        caseDataToShow={caseDataToShow}
        ITEMS_PER_PAGE={ITEMS_PER_PAGE}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
