import React, { useEffect, useState } from "react";
import { Image, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { CaseActivationButton } from "../../../components/casebutton/caseactivationbutton";
import { CaseRejectedButton } from "../../../components/casebutton/caserejectedbutton";
import { CASE_STATUS_ENUM, FILTERED_CASE_STATUS_ENUM } from "../../../config";
import sort from "../../../svgs/sort.svg";
import { CaseDataType1, FilteredCaseStatusType } from "../../../types/types";

interface CaseTableProps {
  caseData: CaseDataType1[];
  filteredCaseStatus: FilteredCaseStatusType;
}

export const CaseTable: React.FC<CaseTableProps> = ({
  caseData,
  filteredCaseStatus,
}: CaseTableProps) => {
  const [caseDataToShow, setCaseDataToShow] = useState<
    CaseDataType1[] | undefined
  >([]);
  const [isDateReferralChronological, setIsDateReferralChronological] =
    useState<Boolean>(false);
  const navigate = useNavigate();

  const caseTableDataStyle = {
    maxWidth: "150px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };

  const handleSortDateReferral: () => void = () => {
    setIsDateReferralChronological(!isDateReferralChronological);
    caseData.sort((a, b) => {
      return isDateReferralChronological
        ? a.datereferral.getTime() - b.datereferral.getTime()
        : b.datereferral.getTime() - a.datereferral.getTime();
    });
  };

  const handleViewCaseInfo: (caseid: number) => void = (caseid) => {
    return navigate(`/case/${caseid}`);
  };

  useEffect(() => {
    switch (filteredCaseStatus) {
      case FILTERED_CASE_STATUS_ENUM.ACTIVATED:
        const activatedCasesData = caseData.filter(
          (caseItem) => caseItem.status === CASE_STATUS_ENUM.ACTIVATED
        );
        setCaseDataToShow(activatedCasesData);
        break;
      case FILTERED_CASE_STATUS_ENUM.PENDING:
        const pendingCasesData = caseData.filter(
          (caseItem) => caseItem.status === CASE_STATUS_ENUM.PENDING
        );
        setCaseDataToShow(pendingCasesData);
        break;
      case FILTERED_CASE_STATUS_ENUM.REJECTED:
        const rejectedCasesData = caseData.filter(
          (caseItem) => caseItem.status === CASE_STATUS_ENUM.REJECTED
        );
        setCaseDataToShow(rejectedCasesData);
        break;
      case FILTERED_CASE_STATUS_ENUM.NONE:
        setCaseDataToShow(caseData);
        break;
      default:
        break;
    }
  }, [caseData, filteredCaseStatus, caseDataToShow]);

  return (
    <div style={{ textAlign: "center" }}>
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
            caseDataToShow.map((caseDataItem) => (
              <tr key={caseDataItem.caseid}>
                <td>
                  {" "}
                  {caseDataItem.datereferral.toLocaleString("en-US", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                  ,{" "}
                  {caseDataItem.datereferral.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </td>
                <td
                  style={{
                    ...caseTableDataStyle,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => handleViewCaseInfo(caseDataItem.caseid)}
                >
                  <u>{caseDataItem.caseid}</u>
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
            ))}
        </tbody>
      </Table>
    </div>
  );
};
