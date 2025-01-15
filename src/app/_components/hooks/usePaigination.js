import { useState } from "react";

const usePagination = (initialPage = 1, totalPages = 1, visiblePageCount=5) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [total, setTotalPages] = useState(totalPages);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= total) {
      setCurrentPage(page);
    }
  };

  const goToNextPage = () => {
    if (currentPage < total) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPageRange = () => {
    const range = [];
    const left = Math.max(1, currentPage - Math.floor(visiblePageCount / 2));
    const right = Math.min(total, left + visiblePageCount - 1);

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    return range;
  };

  return {
    currentPage,
    totalPages: total,
    setTotalPages,
    handlePageChange,
    goToNextPage,
    goToPreviousPage,
    getPageRange,
  };
};

export default usePagination;
