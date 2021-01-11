import { Link } from "react-router-dom";
import React from "react";
import "./main.scss";
import "./ListInformation.scss";

class ListInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      filtersOpen: false,
    };
  }
  render() {
    return (
      <>
        <div className="list-info" style={{ marginTop: this.props.marginTop }}>
          <p className="job-number">XXX jobs</p>
          <div
            className="filters"
            onClick={() => {
              this.toggleFilters();
              this.toggleNoScroll();
            }}
          >
            <img
              className="filters__img"
              src="https://svgshare.com/i/SxK.svg"
              alt="filter"
            />
            <p className="filters__text">Filters</p>
          </div>
        </div>
        <div
          className={
            this.state.filtersOpen
              ? "filter-overlay-bg visible"
              : "filter-overlay-bg"
          }
        ></div>
      </>
    );
  }
  toggleFilters = () => {
    this.state.filtersOpen
      ? this.setState({ filtersOpen: false })
      : this.setState({ filtersOpen: true });
  };
  toggleNoScroll = () => {
    const body = document.body;
    !this.state.filtersOpen
      ? body.classList.add("no-scroll")
      : body.classList.remove("no-scroll");
  };
}

export default ListInformation;
