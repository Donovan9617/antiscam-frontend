import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config";

export const BackArrowButton = () => {
  const navigate = useNavigate();

  const handlePreviousButton = () => {
    // Would be /dashboard instead later on when there is authentication
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <Container>
      <Button onClick={handlePreviousButton}>Back</Button>
    </Container>
  );
};
