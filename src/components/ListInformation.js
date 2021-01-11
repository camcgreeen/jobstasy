import { Link } from "react-router-dom";
import React from "react";
import "./main.scss";
import "./ListInformation.scss";
// import Slider from "@material-ui/core/Slider";
import RangeSlider from "./RangeSlider";

class ListInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      filtersOpen: true,
    };
  }
  render() {
    const slider = document.getElementById("slider");
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
            this.state.filtersOpen ? "filter-overlay visible" : "filter-overlay"
          }
        >
          <div className="filter-overlay__title">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.90857 3.51569L20.4649 19.072C20.8552 19.4624 20.8552 20.0959 20.4649 20.4863C20.0746 20.8766 19.441 20.8766 19.0507 20.4863L3.49436 4.9299C3.10403 4.53958 3.10403 3.90601 3.49435 3.51569C3.88468 3.12537 4.51824 3.12537 4.90857 3.51569Z"
                fill="#404668"
              />
              <path
                d="M20.6777 5.12146L5.12132 20.6778C4.731 21.0681 4.09743 21.0681 3.70711 20.6778C3.31678 20.2875 3.31678 19.6539 3.70711 19.2636L19.2635 3.70725C19.6538 3.31693 20.2873 3.31693 20.6777 3.70725C21.068 4.09757 21.068 4.73114 20.6777 5.12146Z"
                fill="#404668"
              />
            </svg>

            <h1>Filters</h1>
          </div>
          <div className="filter-overlay__body">
            <div className="filter-overlay__body__section">
              <form action="">
                <h2>Sort by </h2>
                <label htmlFor="sortOptions">
                  <select name="sortOptions" id="sortOptions">
                    <option value="most recent">most recent</option>
                    <option value="salary (high to low)">
                      salary (high to low)
                    </option>
                    <option value="salary (low to high)">
                      salary (low to high)
                    </option>
                  </select>
                </label>
              </form>
            </div>
            <hr />
            <div className="filter-overlay__body__section">
              <h2>Salary</h2>
              <RangeSlider />
            </div>
            <div className="filter-overlay__body__section">
              <h2>Company</h2>
              <input type="text" />
            </div>
            <div className="filter-overlay__body__section">
              <h2>Type of work</h2>
              <form action="">
                <input type="checkbox" value="full-time" id="full-time" />
                <label htmlFor="full-time">Full Time</label>
                <input type="checkbox" value="part-time" id="part-time" />
                <label htmlFor="part-time">Part Time</label>
              </form>
            </div>
          </div>
        </div>
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
  // componentDidMount = () => {
  //   const slider =
  // }
}

export default ListInformation;
