import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { editDashboardStatusCase } from "../../api/api";
import { CASE_STATUS_ENUM } from "../../types/enums";
import { CaseDataDashboardType } from "../../types/types";

interface CaseRejectedButtonProps {
  data: CaseDataDashboardType;
}

export const CaseRejectedButton: React.FC<CaseRejectedButtonProps> = ({
  data,
}: CaseRejectedButtonProps) => {
  const [showConfirmation, setShowConfirmation] = useState<boolean | undefined>(
    false
  );

  const handleReject: () => void = () => {
    setShowConfirmation(true);
  };

  const handleConfirmReject: () => void = async () => {
    await editDashboardStatusCase(data, CASE_STATUS_ENUM.REJECTED);
    setShowConfirmation(false);
  };

  const handleCloseConfirmation: () => void = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <Button onClick={handleReject} variant="danger" size="sm">
        Reject
      </Button>
      <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Reject</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to reject this case?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmReject}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
