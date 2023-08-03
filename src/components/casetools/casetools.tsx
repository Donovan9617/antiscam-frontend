import { FilterCase } from "./casefilter/casefilter";
import { CaseNewButton } from "./casenewbutton/casenewbutton";
import { CaseSearch } from "./casesearch/casesearch";
import { SortCase } from "./casesort/casesort";

const caseToolsRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "10px",
};

export const CaseTools: React.FC = () => {
  return (
    <div style={caseToolsRowStyle}>
      <CaseNewButton />
      <FilterCase />
      <SortCase />
      <CaseSearch />
    </div>
  );
};
