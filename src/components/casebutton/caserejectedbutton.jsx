import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const CaseRejectedButton = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleReject = () => {
    setShowConfirmation(true);
  };
  const handleConfirmReject = () => {
    // Perform the reject action here
    // ...
    setShowConfirmation(false);
  };
  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <Button onClick={handleReject} variant="danger">
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
