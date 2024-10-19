import React from 'react';

const PaginationComponent = ({ pageCount, currentPage, onPageChange }) => {
  // Generate an array of page numbers
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

  // Function to handle click on page number
  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber); // Pass the clicked page number to the handler
  };

  // Render the pagination controls
  return (
    <div className="pagination-container">
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => handlePageClick(number)}
          className={`page-item ${currentPage === number ? 'active' : ''}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default PaginationComponent;
