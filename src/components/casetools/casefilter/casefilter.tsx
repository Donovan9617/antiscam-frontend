import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";
import {
  CASE_STATUS_ENUM,
  FILTERED_CASE_STATUS_ENUM,
} from "../../../types/enums";
import { FilteredCaseStatusType } from "../../../types/types";
import { FilterContext } from "../../filtercontext";

export const FilterCase: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [applyDateFilter, setApplyDateFilter] = useState<boolean>(false);
  const { filteredCaseStatus, setFilteredCaseStatus, setFilteredCaseDate } =
    useContext(FilterContext);

  const handleFilteredCaseStatus = (event: ChangeEvent<HTMLInputElement>) => {
    const status = event.target.value as FilteredCaseStatusType;
    setFilteredCaseStatus(status);
  };

  const handleFilteredCaseDate = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setApplyDateFilter(checked);
    if (!checked) {
      setStartDate("");
      setEndDate("");
    }
  };

  useEffect(() => {
    if (applyDateFilter && startDate && endDate) {
      setFilteredCaseDate({ startDate, endDate });
    } else {
      setFilteredCaseDate({ startDate: "", endDate: "" });
    }
  }, [applyDateFilter, startDate, endDate, setFilteredCaseDate]);

  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      rootClose={true}
      overlay={
        <Popover>
          <Popover.Body>
            <Form>
              <h6>
                <u>Status</u>
              </h6>
              <Form.Check
                type="radio"
                value={FILTERED_CASE_STATUS_ENUM.NONE}
                label={CASE_STATUS_ENUM.NONE}
                checked={filteredCaseStatus === FILTERED_CASE_STATUS_ENUM.NONE}
                onChange={handleFilteredCaseStatus}
              />
              <Form.Check
                type="radio"
                value={FILTERED_CASE_STATUS_ENUM.ACTIVATED}
                label={CASE_STATUS_ENUM.ACTIVATED}
                checked={
                  filteredCaseStatus === FILTERED_CASE_STATUS_ENUM.ACTIVATED
                }
                onChange={handleFilteredCaseStatus}
              />
              <Form.Check
                type="radio"
                value={FILTERED_CASE_STATUS_ENUM.PENDING}
                label={CASE_STATUS_ENUM.PENDING}
                checked={
                  filteredCaseStatus === FILTERED_CASE_STATUS_ENUM.PENDING
                }
                onChange={handleFilteredCaseStatus}
              />
              <Form.Check
                type="radio"
                value={FILTERED_CASE_STATUS_ENUM.REJECTED}
                label={CASE_STATUS_ENUM.REJECTED}
                checked={
                  filteredCaseStatus === FILTERED_CASE_STATUS_ENUM.REJECTED
                }
                onChange={handleFilteredCaseStatus}
              />
              <br />
              <h6>
                <u>Date</u>
              </h6>
              <Form.Group>
                <Form.Label>Start Date:</Form.Label>
                <Form.Control
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>End Date:</Form.Label>
                <Form.Control
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Form.Group>
              <Form.Check
                type="checkbox"
                label="Apply date filter"
                disabled={!startDate || !endDate}
                checked={applyDateFilter}
                onChange={handleFilteredCaseDate}
              />
            </Form>
          </Popover.Body>
        </Popover>
      }
    >
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#ff8810"
          className="bi bi-funnel"
          viewBox="0 0 16 16"
        >
          <path
            d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"
            fill="#ffffff"
          />
        </svg>{" "}
        Filter
      </Button>
    </OverlayTrigger>
  );
};
