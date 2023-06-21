import { FilteredCaseStatusType } from "../../../types/types";
import { FilterCase } from "./casefilter/casefilter";
import { CaseNewButton } from "./casenewbutton/casenewbutton";

interface CaseToolsProps {
  filteredCaseStatus: FilteredCaseStatusType;
  setFilteredCaseStatus: (status: FilteredCaseStatusType) => void;
}

export const CaseTools: React.FC<CaseToolsProps> = ({
  filteredCaseStatus,
  setFilteredCaseStatus,
}: CaseToolsProps) => {
  return (
    <>
      <CaseNewButton />
      <FilterCase
        filteredCaseStatus={filteredCaseStatus}
        setFilteredCaseStatus={setFilteredCaseStatus}
      />
    </>
  );
};
