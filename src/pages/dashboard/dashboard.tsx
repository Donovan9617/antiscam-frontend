import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  CASE_SCAMTYPE_ENUM,
  CASE_STATUS_ENUM,
  FILTERED_CASE_STATUS_ENUM,
  SORT_CASE_DATE_ENUM,
} from "../../types/enums";
import {
  CaseDataDashboardType,
  FilteredCaseDateType,
  FilteredCaseStatusType,
  SortCaseDateType,
} from "../../types/types";
import { CaseStatistics } from "./casestatistics/casestatistics";
import { CaseTable } from "./casetable/casetable";
import { CaseTools } from "./casetools/casetools";

export const Dashboard: React.FC = () => {
  const [caseData, setCaseData] = useState<CaseDataDashboardType[] | undefined>(
    []
  );
  const [searchedCaseDescription, setSearchedCaseDescription] =
    useState<string>("");
  const [filteredCaseStatus, setFilteredCaseStatus] =
    useState<FilteredCaseStatusType>(FILTERED_CASE_STATUS_ENUM.NONE);
  const [filteredCaseDate, setFilteredCaseDate] =
    useState<FilteredCaseDateType>({
      startDate: "",
      endDate: "",
    });
  const [sortedCaseDate, setSortedCaseDate] = useState<SortCaseDateType>(
    SORT_CASE_DATE_ENUM.NEW_TO_OLD
  );

  useEffect(() => {
    // Mock data for now
    const data: CaseDataDashboardType[] = [
      {
        datereferral: new Date(2023, 7, 10, 21, 0),
        caseid: "c17ff314-87f0-49e5-8adc-a5c3dceaa44b",
        description: "Testing",
        scamtype: CASE_SCAMTYPE_ENUM.JOB_SCAM,
        assignee: "Tom",
        status: CASE_STATUS_ENUM.ACTIVATED,
      },
      {
        datereferral: new Date(2023, 2, 9, 22, 0),
        caseid: "3f3497a2-b4b0-4ee5-ae78-2e8b7818fc15",
        description: "Testing again",
        scamtype: CASE_SCAMTYPE_ENUM.INVESTMENT_SCAM,
        assignee: "John",
        status: CASE_STATUS_ENUM.ACTIVATED,
      },
      {
        datereferral: new Date(2023, 9, 9, 8, 0),
        caseid: "21c350a1-230f-4aac-be03-76f6e721d7fd",
        description: "Testing",
        scamtype: CASE_SCAMTYPE_ENUM.JOB_SCAM,
        assignee: "Bob",
        status: CASE_STATUS_ENUM.PENDING,
      },
      {
        datereferral: new Date(2023, 8, 8, 17, 0),
        caseid: "c047b962-073b-4a6f-a8ba-a020c2ef0ecd",
        description: "Testing again testing again testing again",
        scamtype: CASE_SCAMTYPE_ENUM.PARCEL_SCAM,
        assignee: "Adam",
        status: CASE_STATUS_ENUM.PENDING,
      },
      {
        datereferral: new Date(2023, 6, 3, 7, 0),
        caseid: "22c350a1-230f-4aac-be03-76f6e721d7fd",
        description: "Testing",
        scamtype: CASE_SCAMTYPE_ENUM.PARCEL_SCAM,
        assignee: "Bob",
        status: CASE_STATUS_ENUM.PENDING,
      },
      {
        datereferral: new Date(2023, 6, 15, 6, 0),
        caseid: "c147b962-073b-4a6f-a8ba-a020c2ef0ecd",
        description: "Testing again testing again testing again",
        scamtype: CASE_SCAMTYPE_ENUM.LOVE_SCAM,
        assignee: "Adam",
        status: CASE_STATUS_ENUM.PENDING,
      },
      {
        datereferral: new Date(2023, 10, 9, 5, 0),
        caseid: "26c350a1-230f-4aac-be03-76f6e721d7fd",
        description: "Testing",
        scamtype: CASE_SCAMTYPE_ENUM.JOB_SCAM,
        assignee: "Bob",
        status: CASE_STATUS_ENUM.PENDING,
      },
      {
        datereferral: new Date(2023, 5, 9, 8, 0),
        caseid: "d247b962-073b-4a6f-a8ba-a020c2ef0ecd",
        description: "Testing again testing again testing again",
        scamtype: CASE_SCAMTYPE_ENUM.PARCEL_SCAM,
        assignee: "Adam",
        status: CASE_STATUS_ENUM.PENDING,
      },
      {
        datereferral: new Date(2023, 2, 17, 7, 0),
        caseid: "c247b962-073b-4a6f-a8ba-a020c2ef0ecd",
        description: "Testing again testing again testing again",
        scamtype: CASE_SCAMTYPE_ENUM.ECOMMERCE_SCAM,
        assignee: "Adam",
        status: CASE_STATUS_ENUM.PENDING,
      },
      {
        datereferral: new Date(2023, 1, 10, 18, 0),
        caseid: "6247b962-073b-4a6f-a8ba-a020c2ef0ecd",
        description: "Testingo",
        scamtype: CASE_SCAMTYPE_ENUM.JOB_SCAM,
        assignee: "Tom",
        status: CASE_STATUS_ENUM.ACTIVATED,
      },
      {
        datereferral: new Date(2023, 4, 2, 23, 0),
        caseid: "io8j3562-073b-4a6f-a8ba-a020c2ef0ecd",
        description: "Testt",
        scamtype: CASE_SCAMTYPE_ENUM.ECOMMERCE_SCAM,
        assignee: "Adam",
        status: CASE_STATUS_ENUM.ACTIVATED,
      },
    ];
    data.sort((a, b) => {
      return b.datereferral.getTime() - a.datereferral.getTime();
    });
    setCaseData(data);

    // getAllCases().then((data: CaseDataDashboardType[]) => {
    //   data.sort((a, b) => {
    //     return b.datereferral.getTime() - a.datereferral.getTime();
    //   });
    //   setCaseData(data);
    // });
  }, []);

  return (
    <Container className="mt-4">
      <Container>
        <h2 style={{ textAlign: "center" }}>Case Management Dashboard</h2>
      </Container>
      <Container className="mt-2">
        <CaseStatistics caseData={caseData} />
      </Container>
      <Container className="mt-3">
        <CaseTools
          filteredCaseStatus={filteredCaseStatus}
          setFilteredCaseStatus={setFilteredCaseStatus}
          setSearchedCaseDescription={setSearchedCaseDescription}
          setFilteredCaseDate={setFilteredCaseDate}
          sortedCaseDate={sortedCaseDate}
          setSortedCaseDate={setSortedCaseDate}
        />
      </Container>
      <Container className="mt-3">
        <CaseTable
          caseData={caseData}
          filteredCaseStatus={filteredCaseStatus}
          searchedCaseDescription={searchedCaseDescription}
          filteredCaseDate={filteredCaseDate}
          sortedCaseDate={sortedCaseDate}
        />
      </Container>
    </Container>
  );
};
