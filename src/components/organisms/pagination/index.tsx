import React from 'react';
import ReactPaginate from 'react-paginate';
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';
import style from './pagination.module.scss'; 

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  handlePageChange: ({ selected }: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, currentPage, handlePageChange }) => {
  const validCurrentPage = currentPage < pageCount ? currentPage : pageCount - 1;

  return (
    <ReactPaginate
      previousLabel={<BiCaretLeft />}
      nextLabel={<BiCaretRight />}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={handlePageChange}
      activeClassName={style.active}
      forcePage={validCurrentPage}
      className={style.pagination}
    />
  );
};

export default Pagination;
