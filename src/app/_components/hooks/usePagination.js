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

  //이하 그룹이동 코드
     const goToNextGroup = () => {
      const nextGroupStart = Math.min(
     Math.floor((currentPage - 1) / pageGroupSize) * pageGroupSize + pageGroupSize + 1,
       total
      );
      setCurrentPage(nextGroupStart);
    };
    
    const goToPreviousGroup = () => {
      const prevGroupEnd = Math.max(
        Math.floor((currentPage - 1) / pageGroupSize) * pageGroupSize - pageGroupSize + 1,
        1
      );
      setCurrentPage(prevGroupEnd);
    };

  return {
    currentPage,
    totalPages: total,
    setTotalPages,
    handlePageChange,
    goToNextPage,
    goToPreviousPage,
    getPageRange,
    //그룹이동 함수 사용시 호출
    goToNextGroup,
    goToPreviousGroup,
  };
};

export default usePagination;
