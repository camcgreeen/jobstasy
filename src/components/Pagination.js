import React from "react";
import "./main.scss";
import "./Pagination.scss";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.totalJobs / this.props.jobsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    return (
      <nav className="nav-pagination">
        <ul className="pagination">
          <li
            key={-1}
            className="page-item"
            onClick={() => this.props.paginate(1)}
            className="page-link page-link--arrow-2"
          >
            {"<<"}
          </li>
          <li
            key={0}
            className="page-item"
            onClick={() =>
              this.props.currentPage - 1 > 0 &&
              this.props.paginate(this.props.currentPage - 1)
            }
            className="page-link page-link--arrow-1"
          >
            {"<"}
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className="page-item"
              onClick={() => this.props.paginate(number)}
              className={
                this.props.currentPage === number
                  ? "page-link page-selected"
                  : "page-link"
              }
            >
              {number}
            </li>
          ))}
          <li
            key={pageNumbers + 1}
            className="page-item"
            onClick={() =>
              this.props.currentPage + 1 < pageNumbers.length + 1 &&
              this.props.paginate(this.props.currentPage + 1)
            }
            className="page-link page-link--arrow-1"
          >
            {">"}
          </li>
          <li
            key={pageNumbers + 2}
            className="page-item"
            onClick={() => this.props.paginate(pageNumbers.length)}
            className="page-link page-link--arrow-2"
          >
            {">>"}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
