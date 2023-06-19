import React, { useEffect, useState } from "react";
import { Image, Table } from "react-bootstrap";
import { CaseActivationButton } from "../../../components/casebutton/caseactivationbutton";
import { CaseRejectedButton } from "../../../components/casebutton/caserejectedbutton";
import { CASE_STATUS, FILTERED_CASE_STATUS } from "../../../config";
import sort from "../../../svgs/sort.svg";

export const CaseTable = ({ caseData, filteredCaseStatus }) => {
  const [caseDataToShow, setCaseDataToShow] = useState([]);
  const [isDateReferralChronological, setIsDateReferralChronological] =
    useState(false);

  const caseTableDataStyle = {
    maxWidth: "150px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };

  const handleSortDateReferral = () => {
    setIsDateReferralChronological(!isDateReferralChronological);
    caseData.sort((a, b) => {
      return isDateReferralChronological
        ? a.datereferral - b.datereferral
        : b.datereferral - a.datereferral;
    });
  };

  useEffect(() => {
    switch (filteredCaseStatus) {
      case FILTERED_CASE_STATUS.ACTIVATED:
        const activatedCasesData = caseData.filter(
          (caseItem) => caseItem.status === CASE_STATUS.ACTIVATED
        );
        setCaseDataToShow(activatedCasesData);
        break;
      case FILTERED_CASE_STATUS.PENDING:
        const pendingCasesData = caseData.filter(
          (caseItem) => caseItem.status === CASE_STATUS.PENDING
        );
        setCaseDataToShow(pendingCasesData);
        break;
      case FILTERED_CASE_STATUS.REJECTED:
        const rejectedCasesData = caseData.filter(
          (caseItem) => caseItem.status === CASE_STATUS.REJECTED
        );
        setCaseDataToShow(rejectedCasesData);
        break;
      case FILTERED_CASE_STATUS.NONE:
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
          {caseDataToShow.map((caseDataItem) => (
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
              <td style={caseTableDataStyle}>{caseDataItem.caseid}</td>
              <td style={caseTableDataStyle}>{caseDataItem.description}</td>
              <td style={caseTableDataStyle}>{caseDataItem.scamtype}</td>
              <td style={caseTableDataStyle}>{caseDataItem.assignee}</td>
              <td style={caseTableDataStyle}>{caseDataItem.status}</td>
              <td style={{ width: "1%" }}>
                {caseDataItem.status === CASE_STATUS.PENDING ? (
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
