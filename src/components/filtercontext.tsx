import { createContext } from "react";
import {
  CASE_DESCRIPTION,
  FILTERED_CASE_DATE_EMPTY,
  FILTERED_CASE_STATUS_ENUM,
  SORT_CASE_DATE_ENUM,
} from "../types/enums";
import { FilterContextValuesType } from "../types/types";

const initialFilterContextValues: FilterContextValuesType = {
  filteredCaseStatus: FILTERED_CASE_STATUS_ENUM.NONE,
  searchedCaseDescription: CASE_DESCRIPTION.EMPTY,
  filteredCaseDate: FILTERED_CASE_DATE_EMPTY,
  sortedCaseDate: SORT_CASE_DATE_ENUM.NEW_TO_OLD,
  setFilteredCaseStatus: () => {},
  setSearchedCaseDescription: () => {},
  setFilteredCaseDate: () => {},
  setSortedCaseDate: () => {},
};

export const FilterContext = createContext<FilterContextValuesType>(
  initialFilterContextValues
);
