import ReactPaginate from "react-paginate";
import style from "./pagination.module.scss";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { Box, useColorModeValue } from "@chakra-ui/react";


export const Pagination = ({ tasks, onPageChange, currentPage }: any) => {
    const itemsPerPage = 3;
  
    const handlePageChange = ({ selected }: { selected: number }) => {
      onPageChange({ selected });
    };
    const bgColor = useColorModeValue('rgba(255, 255, 255, 0.366)','rgba(0, 0, 0, 0.300)');
    const textColor = useColorModeValue('rgba(0, 0, 0, 0.900)','rgba(257, 255, 255, 0.600)');
    return (
      <Box bgColor={bgColor} w='35%' m='0px auto' textColor={textColor} >
        <ReactPaginate
          previousLabel={<BiCaretLeft />}
          nextLabel={<BiCaretRight />}
          breakLabel={"..."}
          pageCount={Math.ceil(tasks.length / itemsPerPage)}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageChange}
          className={style.pagination}
          activeClassName={style.active}
          forcePage={currentPage}
        />
      </Box>
    );
  };
  