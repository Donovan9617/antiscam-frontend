import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config";

export const CaseActivationButton: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateCase: () => void = () => {
    navigate(ROUTES.NEWCASE);
  };

  return <Button onClick={handleCreateCase}>Activate</Button>;
};
