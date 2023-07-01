import { ChangeEvent, useEffect, useState } from "react";
import { Button, Form, Image, OverlayTrigger, Popover } from "react-bootstrap";
import funnel from "../../../../assets/svgs/funnel.svg";
import {
  CASE_STATUS_ENUM,
  FILTERED_CASE_STATUS_ENUM,
} from "../../../../types/enums";
import {
  FilteredCaseDateType,
  FilteredCaseStatusType,
} from "../../../../types/types";

interface FilterCaseProps {
  filteredCaseStatus: FilteredCaseStatusType;
  setFilteredCaseStatus: (status: FilteredCaseStatusType) => void;
  setFilteredCaseDate: (date: FilteredCaseDateType) => void;
}

const filterCaseStyle: React.CSSProperties = {
  marginRight: 10,
};

export const FilterCase: React.FC<FilterCaseProps> = ({
  filteredCaseStatus,
  setFilteredCaseStatus,
  setFilteredCaseDate,
}: FilterCaseProps) => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [applyDateFilter, setApplyDateFilter] = useState<boolean>(false);

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
      <Button style={filterCaseStyle}>
        <Image src={funnel} alt="funnel" /> Filter
      </Button>
    </OverlayTrigger>
  );
};
