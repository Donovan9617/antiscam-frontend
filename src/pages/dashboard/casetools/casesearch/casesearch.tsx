import { Form, Image, InputGroup } from "react-bootstrap";
import search from "../../../../assets/svgs/search.svg";

interface CaseSearchProps {
  setSearchedCaseDescription: (search: string) => void;
}

const caseSearchBarStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  marginRight: 10,
};

const caseSearchBarInputStyle: React.CSSProperties = {
  width: "250px",
};

const caseSearchIconTextStyle: React.CSSProperties = {
  backgroundColor: "var(--bs-primary)",
  borderColor: "var(--bs-primary)",
  color: "white",
  cursor: "pointer",
};

const caseSearchIconStyle: React.CSSProperties = {
  width: "16px",
  height: "16px",
};

export const CaseSearch: React.FC<CaseSearchProps> = ({
  setSearchedCaseDescription,
}: CaseSearchProps) => {
  const handleSearch: () => void = () => {};

  return (
    <Form style={caseSearchBarStyle}>
      <InputGroup>
        <Form.Control
          type="search"
          placeholder="Search by description..."
          onChange={(e) => {
            setSearchedCaseDescription(e.target.value);
          }}
          style={caseSearchBarInputStyle}
        />
        <InputGroup.Text style={caseSearchIconTextStyle}>
          <Image
            src={search}
            alt="search"
            onClick={handleSearch}
            style={caseSearchIconStyle}
          />
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
};
