import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { editDashboardStatusCase } from "../../api/api";
import { CASE_STATUS_ENUM } from "../../types/enums";
import { CaseDataDashboardType } from "../../types/types";

interface CaseActivationButtonProps {
  data: CaseDataDashboardType;
}

export const CaseActivationButton: React.FC<CaseActivationButtonProps> = ({
  data,
}: CaseActivationButtonProps) => {
  const [showConfirmation, setShowConfirmation] = useState<boolean | undefined>(
    false
  );

  const handleActivate: () => void = () => {
    setShowConfirmation(true);
  };

  const handleConfirmActivate: () => void = async () => {
    await editDashboardStatusCase(data, CASE_STATUS_ENUM.ACTIVATED);
    setShowConfirmation(false);
  };

  const handleCloseConfirmation: () => void = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <Button onClick={handleActivate} size="sm">
        Activate
      </Button>
      <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Activate</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to activate this case?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>
            Cancel
          </Button>
          <Button onClick={handleConfirmActivate}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
