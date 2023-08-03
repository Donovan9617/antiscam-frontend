import { createContext } from "react";
import { FILTERED_CASE_STATUS_ENUM } from "../types/enums";
import { FilteredCaseStatusType } from "../types/types";

export const FilterContext = createContext<FilteredCaseStatusType>(
  FILTERED_CASE_STATUS_ENUM.NONE
);
