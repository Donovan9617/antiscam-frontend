import { useContext } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FilterContext } from "../../filtercontext";

const caseSearchBarStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  marginRight: 10,
};

const caseSearchBarInputStyle: React.CSSProperties = {
  width: "40vw",
};

const caseSearchIconTextStyle: React.CSSProperties = {
  backgroundColor: "var(--bs-primary)",
  borderColor: "var(--bs-primary)",
  color: "white",
  cursor: "pointer",
};

export const CaseSearch: React.FC = () => {
  const { setSearchedCaseDescription } = useContext(FilterContext);

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="16"
            height="16"
          >
            <path
              d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
              fill="#ffffff"
            />
          </svg>
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
};
