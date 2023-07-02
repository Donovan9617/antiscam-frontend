import React, { ChangeEvent } from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";
import { CASE_DATE_ENUM, SORT_CASE_DATE_ENUM } from "../../../../types/enums";
import { SortCaseDateType } from "../../../../types/types";

interface SortCaseProps {
  sortedCaseDate: SortCaseDateType;
  setSortedCaseDate: (date: SortCaseDateType) => void;
}
export const SortCase: React.FC<SortCaseProps> = ({
  sortedCaseDate,
  setSortedCaseDate,
}: SortCaseProps) => {
  const handleSortedCaseDate = (event: ChangeEvent<HTMLInputElement>) => {
    setSortedCaseDate(event.target.value as SortCaseDateType);
  };

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
                <u>Date Referral</u>
              </h6>
              <Form.Check
                type="radio"
                value={SORT_CASE_DATE_ENUM.NEW_TO_OLD}
                label={CASE_DATE_ENUM.NEW_TO_OLD}
                checked={sortedCaseDate === SORT_CASE_DATE_ENUM.NEW_TO_OLD}
                onChange={handleSortedCaseDate}
              />
              <Form.Check
                type="radio"
                value={SORT_CASE_DATE_ENUM.OLD_TO_NEW}
                label={CASE_DATE_ENUM.OLD_TO_NEW}
                checked={sortedCaseDate === SORT_CASE_DATE_ENUM.OLD_TO_NEW}
                onChange={handleSortedCaseDate}
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
          fill="#000000"
          className="bi bi-sort-down"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"
            fill="#ffffff"
          />
        </svg>{" "}
        Sort
      </Button>
    </OverlayTrigger>
  );
};
