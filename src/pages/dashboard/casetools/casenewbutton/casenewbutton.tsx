import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const caseNewButtonStyle: React.CSSProperties = {
  marginRight: 10,
};

export const CaseNewButton: React.FC = () => {
  const navigate = useNavigate();
  const handleNewCaseClick: () => void = () => {
    navigate("new-case");
  };
  return (
    <Button onClick={handleNewCaseClick} style={caseNewButtonStyle}>
      + New Case
    </Button>
  );
};
