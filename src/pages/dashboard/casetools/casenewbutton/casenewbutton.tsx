import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const CaseNewButton: React.FC = () => {
  const navigate = useNavigate();
  const handleNewCaseClick: () => void = () => {
    navigate("new-case");
  };
  return (
    <Button onClick={handleNewCaseClick} style={{ marginRight: "10px" }}>
      + New Case
    </Button>
  );
};
