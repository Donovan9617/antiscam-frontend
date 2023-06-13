import React, { useState } from "react";
import { Pagination, Table } from "react-bootstrap";
import { CaseActivationButton } from "../../../components/casebutton/caseactivationbutton";
import { CaseRejectedButton } from "../../../components/casebutton/caserejectedbutton";
import { CASE_STATUS } from "../../../config";

export const CaseTable = ({ caseData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const caseDataToShow = caseData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(caseData.length / itemsPerPage);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Table responsive>
        <thead>
          <tr style={{ backgroundColor: "#d0d0d0" }}>
            <th>Case ID</th>
            <th>Description</th>
            <th>Date Referral</th>
            <th>Scam Type</th>
            <th>Assignee</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {caseDataToShow.map((caseDataItem) => (
            <tr key={caseDataItem.caseid}>
              <td>{caseDataItem.caseid}</td>
              <td>{caseDataItem.description}</td>
              <td>{caseDataItem.datereferral}</td>
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
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePaginationClick(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};
