import React from 'react'
// import Pagination from 'react-bootstrap/Pagination';
import ReactPaginate from 'react-paginate';

const PaginationComponent = ({choosePageNumber,pageCount}) => {
    const handlePageClick=(data)=>{
        console.log(data);
        console.log(data.selected);
        choosePageNumber(data.selected + 1)
    }


    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"

            containerClassName={'pagination justify-content-center p-3  '}
            pageClassName={'page-item '}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            nextClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active-color'}
    />
)}

export default PaginationComponent