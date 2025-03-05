import React from "react"

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => (
  <div className="pagination">
    <button
      disabled={currentPage === 1}
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    >
      Previous
    </button>
    <span>
      Page {currentPage} of {totalPages}
    </span>
    <button
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    >
      Next
    </button>
  </div>
);

export default Pagination;