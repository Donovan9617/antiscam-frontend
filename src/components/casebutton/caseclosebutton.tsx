import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { editDashboardStatusCase } from "../../api/api";
import { CASE_STATUS_ENUM } from "../../types/enums";
import { CaseDataDashboardType } from "../../types/types";

interface CaseCloseButtonProps {
  data: CaseDataDashboardType;
}

export const CaseCloseButton: React.FC<CaseCloseButtonProps> = ({
  data,
}: CaseCloseButtonProps) => {
  const [showConfirmation, setShowConfirmation] = useState<boolean | undefined>(
    false
  );

  const handleClose: () => void = () => {
    setShowConfirmation(true);
  };

  const handleConfirmClose: () => void = async () => {
    await editDashboardStatusCase(data, CASE_STATUS_ENUM.CLOSED);
    setShowConfirmation(false);
  };

  const handleCloseConfirmation: () => void = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <Button onClick={handleClose} variant="secondary" size="sm">
        Close
      </Button>
      <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Close</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to close this case?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>
            Cancel
          </Button>
          <Button onClick={handleConfirmClose}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
