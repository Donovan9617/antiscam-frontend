import { ReactElement } from "react";
import { Pagination } from "react-bootstrap";
import { CaseDataDashboardType } from "../../../types/types";

interface CasePaginationProps {
  caseData: CaseDataDashboardType[] | undefined;
  caseDataToShow: CaseDataDashboardType[] | undefined;
  ITEMS_PER_PAGE: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const CasePagination: React.FC<CasePaginationProps> = ({
  caseData,
  caseDataToShow,
  ITEMS_PER_PAGE,
  currentPage,
  setCurrentPage,
}: CasePaginationProps) => {
  const totalPages =
    caseDataToShow && Math.ceil(caseDataToShow.length / ITEMS_PER_PAGE);

  const caseDataCurrentPage: CaseDataDashboardType[] | undefined =
    caseDataToShow?.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationItems: () => ReactElement[] = () => {
    const items = [];
    items.push(
      <Pagination.First
        key="first"
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      />
    );
    items.push(
      <Pagination.Prev
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
    );
    if (currentPage > 3) {
      items.push(<Pagination.Ellipsis key="ellipsis-start" />);
    }
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      if (totalPages && i >= 1 && i <= totalPages) {
        items.push(
          <Pagination.Item
            key={i}
            active={i === currentPage}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </Pagination.Item>
        );
      }
    }
    if (totalPages && currentPage < totalPages - 2) {
      items.push(<Pagination.Ellipsis key="ellipsis-end" />);
    }
    items.push(
      <Pagination.Next
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    );
    items.push(
      <Pagination.Last
        key="last"
        onClick={() => totalPages && handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      />
    );
    return items;
  };

  return (
    <div className="d-flex justify-content-between">
      <Pagination>{renderPaginationItems()}</Pagination>
      <div>
        Showing{" "}
        <strong>{caseDataCurrentPage && caseDataCurrentPage.length}</strong> of{" "}
        <strong>{caseData && caseData.length}</strong> results
      </div>
    </div>
  );
};
