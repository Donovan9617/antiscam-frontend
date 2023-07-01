import React, { ChangeEvent } from "react";
import { Button, Form, Image, OverlayTrigger, Popover } from "react-bootstrap";
import sort from "../../../../assets/svgs/sort.svg";
import { CASE_DATE_ENUM, SORT_CASE_DATE_ENUM } from "../../../../types/enums";
import { SortCaseDateType } from "../../../../types/types";

interface SortCaseProps {
  sortedCaseDate: SortCaseDateType;
  setSortedCaseDate: (date: SortCaseDateType) => void;
}

const sortCaseStyle: React.CSSProperties = {
  marginRight: 10,
};

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
      <Button style={sortCaseStyle}>
        <Image src={sort} alt="sort" /> Sort
      </Button>
    </OverlayTrigger>
  );
};
