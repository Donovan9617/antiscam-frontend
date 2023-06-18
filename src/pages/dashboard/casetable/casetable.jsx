import React, { useEffect, useState } from "react";
import { Image, Table } from "react-bootstrap";
import { CaseActivationButton } from "../../../components/casebutton/caseactivationbutton";
import { CaseRejectedButton } from "../../../components/casebutton/caserejectedbutton";
import { CASE_STATUS } from "../../../config";
import sort from "../../../svgs/sort.svg";

export const CaseTable = ({ caseData }) => {
  const [caseDataToShow, setCaseDataToShow] = useState([]);
  const [isDateReferralChronological, setIsDateReferralChronological] =
    useState(false);

  useEffect(() => {
    setCaseDataToShow(caseData);
  }, [caseData]);

  const handleSortDateReferral = () => {
    setIsDateReferralChronological(!isDateReferralChronological);
    caseData.sort((a, b) => {
      return isDateReferralChronological
        ? a.datereferral - b.datereferral
        : b.datereferral - a.datereferral;
    });
    setCaseDataToShow(caseData);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Table responsive>
        <thead>
          <tr style={{ backgroundColor: "#d0d0d0" }}>
            <th>
              Date Referral{" "}
              <Image
                src={sort}
                alt="sort"
                style={{ width: "10px" }}
                onClick={handleSortDateReferral}
              />
            </th>
            <th>Case ID</th>
            <th>Description</th>
            <th>Scam Type</th>
            <th>Assignee</th>
            <th>
              Status <Image src={sort} alt="sort" style={{ width: "10px" }} />
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {caseDataToShow.map((caseDataItem) => (
            <tr key={caseDataItem.caseid}>
              <td>
                {" "}
                {caseDataItem.datereferral.toLocaleDateString()},{" "}
                {caseDataItem.datereferral.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td>{caseDataItem.caseid}</td>
              <td>{caseDataItem.description}</td>
              <td>{caseDataItem.scamtype}</td>
              <td>{caseDataItem.assignee}</td>
              <td>{caseDataItem.status}</td>
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
