import {
  FilteredCaseDateType,
  FilteredCaseStatusType,
  SortCaseDateType,
} from "../../../types/types";
import { FilterCase } from "./casefilter/casefilter";
import { CaseNewButton } from "./casenewbutton/casenewbutton";
import { CaseSearch } from "./casesearch/casesearch";
import { SortCase } from "./casesort/casesort";

interface CaseToolsProps {
  filteredCaseStatus: FilteredCaseStatusType;
  setFilteredCaseStatus: (status: FilteredCaseStatusType) => void;
  setSearchedCaseDescription: (search: string) => void;
  setFilteredCaseDate: (date: FilteredCaseDateType) => void;
  sortedCaseDate: SortCaseDateType;
  setSortedCaseDate: (date: SortCaseDateType) => void;
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
  sortedCaseDate,
  setSortedCaseDate,
}: CaseToolsProps) => {
  return (
    <div style={caseToolsRowStyle}>
      <CaseNewButton />
      <FilterCase
        filteredCaseStatus={filteredCaseStatus}
        setFilteredCaseStatus={setFilteredCaseStatus}
        setFilteredCaseDate={setFilteredCaseDate}
      />
      <SortCase
        sortedCaseDate={sortedCaseDate}
        setSortedCaseDate={setSortedCaseDate}
      />
      <CaseSearch setSearchedCaseDescription={setSearchedCaseDescription} />
    </div>
  );
};
