import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const CaseActivationButton: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState<boolean | undefined>(
    false
  );

  const handleActivate: () => void = () => {
    setShowConfirmation(true);
  };

  const handleConfirmActivate: () => void = () => {
    // Send API to the backend to update the status of the case to Activated
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
