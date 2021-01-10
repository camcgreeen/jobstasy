import { Link } from "react-router-dom";
import React from "react";
import "./main.scss";
import "./ListInformation.scss";

class ListInformation extends React.Component {
  // constructor(prosp)
  render() {
    return (
      <div className="list-info" style={{ marginTop: this.props.marginTop }}>
        <p className="job-number">XXX jobs</p>
        <div className="filters">
          <img
            className="filters__img"
            src="https://svgshare.com/i/SxK.svg"
            alt="filter"
          />
          <p className="filters__text">Filters</p>
        </div>
      </div>
    );
  }
}

export default ListInformation;
