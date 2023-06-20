import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";

const FilterCase = ({ filteredCaseStatus, setFilteredCaseStatus }) => {
  const handleFilteredCases = (event) => {
    const status = event.target.value;
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
                value="none"
                label="None"
                checked={filteredCaseStatus === "none"}
                onChange={handleFilteredCases}
              />
              <Form.Check
                type="radio"
                value="activated"
                label="Activated"
                checked={filteredCaseStatus === "activated"}
                onChange={handleFilteredCases}
              />
              <Form.Check
                type="radio"
                value="pending"
                label="Pending"
                checked={filteredCaseStatus === "pending"}
                onChange={handleFilteredCases}
              />
              <Form.Check
                type="radio"
                value="rejected"
                label="Rejected"
                checked={filteredCaseStatus === "rejected"}
                onChange={handleFilteredCases}
              />
            </Form>
          </Popover.Body>
        </Popover>
      }
    >
      <Button>Filter Case</Button>
    </OverlayTrigger>
  );
};

export const CaseTools = ({ filteredCaseStatus, setFilteredCaseStatus }) => {
  return (
    <>
      <FilterCase
        filteredCaseStatus={filteredCaseStatus}
        setFilteredCaseStatus={setFilteredCaseStatus}
      />
    </>
  );
};
