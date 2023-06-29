import { FilteredCaseDate, FilteredCaseStatusType } from "../../../types/types";
import { FilterCase } from "./casefilter/casefilter";
import { CaseNewButton } from "./casenewbutton/casenewbutton";
import { CaseSearch } from "./casesearch/casesearch";

interface CaseToolsProps {
  filteredCaseStatus: FilteredCaseStatusType;
  setFilteredCaseStatus: (status: FilteredCaseStatusType) => void;
  setSearchedCaseDescription: (search: string) => void;
  setFilteredCaseDate: (date: FilteredCaseDate) => void;
}

const caseToolsRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
};

export const CaseTools: React.FC<CaseToolsProps> = ({
  filteredCaseStatus,
  setFilteredCaseStatus,
  setSearchedCaseDescription,
  setFilteredCaseDate,
}: CaseToolsProps) => {
  return (
    <div style={caseToolsRowStyle}>
      <CaseNewButton />
      <FilterCase
        filteredCaseStatus={filteredCaseStatus}
        setFilteredCaseStatus={setFilteredCaseStatus}
        setFilteredCaseDate={setFilteredCaseDate}
      />
      <CaseSearch setSearchedCaseDescription={setSearchedCaseDescription} />
    </div>
  );
};
