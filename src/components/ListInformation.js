import { Link } from "react-router-dom";
import React from "react";
import "./main.scss";
import "./ListInformation.scss";

class ListInformation extends React.Component {
  render() {
    return (
      <div className="list-info">
        <p className="job-number">XXX jobs</p>
        <div className="filters">
          <img
            className="filters__img"
            src="https://svgshare.com/i/So3.svg"
            alt="filter"
          />
          <p className="filters__text">Filters</p>
        </div>
      </div>
    );
  }
}

export default ListInformation;
