import React, { useEffect, useState } from "react";
import { Image, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CaseActivationButton } from "../../../components/casebutton/caseactivationbutton";
import { CaseRejectedButton } from "../../../components/casebutton/caserejectedbutton";
import { CASE_STATUS } from "../../../config";
import sort from "../../../svgs/sort.svg";

export const CaseTable = ({ caseData }) => {
  const [caseDataToShow, setCaseDataToShow] = useState([]);
  const [isDateReferralChronological, setIsDateReferralChronological] =
    useState(false);
  const navigate = useNavigate();

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
    setCaseDataToShow(caseData);
  };

  const handleViewCaseInfo = (caseid) => {
    return navigate(`/case/${caseid}`);
  };

  useEffect(() => {
    setCaseDataToShow(caseData);
  }, [caseData]);

  return (
    <div style={{ textAlign: "center" }}>
      <Table responsive>
        <thead>
          <tr style={{ backgroundColor: "#d0d0d0" }}>
            <th>
              <div
                style={{ cursor: "pointer" }}
                onClick={handleSortDateReferral}
              >
                Date Referral{" "}
                <Image src={sort} alt="sort" style={{ width: "10px" }} />
              </div>
            </th>
            <th>Case ID</th>
            <th>Description</th>
            <th>Scam Type</th>
            <th>Assignee</th>
            <th>Status</th>
            <th>Action</th>
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
              <td
                style={{ ...caseTableDataStyle, cursor: "pointer" }}
                onClick={() => handleViewCaseInfo(caseDataItem.caseid)}
              >
                <u>{caseDataItem.caseid}</u>
              </td>
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
