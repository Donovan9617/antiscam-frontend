import { ChangeEvent } from "react";
import { Button, Form, Image, OverlayTrigger, Popover } from "react-bootstrap";
import funnel from "../../../../assets/svgs/funnel.svg";
import {
  CASE_STATUS_ENUM,
  FILTERED_CASE_STATUS_ENUM,
} from "../../../../types/enums";
import { FilteredCaseStatusType } from "../../../../types/types";

interface FilterCaseProps {
  filteredCaseStatus: FilteredCaseStatusType;
  setFilteredCaseStatus: (status: FilteredCaseStatusType) => void;
}

const filterCaseStyle: React.CSSProperties = {
  marginRight: 10,
};

export const FilterCase: React.FC<FilterCaseProps> = ({
  filteredCaseStatus,
  setFilteredCaseStatus,
}: FilterCaseProps) => {
  const handleFilteredCases = (event: ChangeEvent<HTMLInputElement>) => {
    const status = event.target.value as FilteredCaseStatusType;
    setFilteredCaseStatus(status);
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
              <Form.Check
                type="radio"
                value={FILTERED_CASE_STATUS_ENUM.NONE}
                label={CASE_STATUS_ENUM.NONE}
                checked={filteredCaseStatus === FILTERED_CASE_STATUS_ENUM.NONE}
                onChange={handleFilteredCases}
              />
              <Form.Check
                type="radio"
                value={FILTERED_CASE_STATUS_ENUM.ACTIVATED}
                label={CASE_STATUS_ENUM.ACTIVATED}
                checked={
                  filteredCaseStatus === FILTERED_CASE_STATUS_ENUM.ACTIVATED
                }
                onChange={handleFilteredCases}
              />
              <Form.Check
                type="radio"
                value={FILTERED_CASE_STATUS_ENUM.PENDING}
                label={CASE_STATUS_ENUM.PENDING}
                checked={
                  filteredCaseStatus === FILTERED_CASE_STATUS_ENUM.PENDING
                }
                onChange={handleFilteredCases}
              />
              <Form.Check
                type="radio"
                value={FILTERED_CASE_STATUS_ENUM.REJECTED}
                label={CASE_STATUS_ENUM.REJECTED}
                checked={
                  filteredCaseStatus === FILTERED_CASE_STATUS_ENUM.REJECTED
                }
                onChange={handleFilteredCases}
              />
            </Form>
          </Popover.Body>
        </Popover>
      }
    >
      <Button style={filterCaseStyle}>
        <Image src={funnel} alt="funnel" /> Filter Case
      </Button>
    </OverlayTrigger>
  );
};
