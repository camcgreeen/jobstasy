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
      filtersOpen: false,
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
              className="filter-overlay__title__close"
              onClick={() => {
                this.toggleFilters();
                this.toggleNoScroll();
              }}
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
              <form action="" className="filter-overlay__body__section__sort">
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
            <hr />
            <div className="filter-overlay__body__section">
              <h2>Company</h2>
              <div className="filter-overlay__body__section__area">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.6875 2.25C4.69111 2.25 2.25 4.69112 2.25 7.6875C2.25 10.6839 4.69111 13.125 7.6875 13.125C8.98363 13.125 10.1751 12.6671 11.1108 11.9062L14.7898 15.5852C14.8416 15.6392 14.9037 15.6823 14.9724 15.712C15.0411 15.7417 15.115 15.7574 15.1899 15.7581C15.2647 15.7589 15.3389 15.7447 15.4082 15.7164C15.4775 15.6881 15.5405 15.6463 15.5934 15.5934C15.6463 15.5405 15.6881 15.4775 15.7164 15.4082C15.7447 15.3389 15.7589 15.2647 15.7581 15.1899C15.7574 15.115 15.7417 15.0411 15.712 14.9724C15.6823 14.9037 15.6392 14.8416 15.5852 14.7898L11.9063 11.1108C12.6671 10.1751 13.125 8.98363 13.125 7.6875C13.125 4.69112 10.6839 2.25 7.6875 2.25ZM7.6875 3.375C10.0759 3.375 12 5.29911 12 7.6875C12 8.85098 11.5411 9.90214 10.7966 10.6765C10.7507 10.7102 10.7102 10.7507 10.6765 10.7966C9.90214 11.5411 8.85098 12 7.6875 12C5.29911 12 3.375 10.0759 3.375 7.6875C3.375 5.29911 5.29911 3.375 7.6875 3.375Z"
                    fill="#A0AEC0"
                  />
                </svg>

                <input type="text" placeholder="Search by company" />
              </div>
            </div>
            <hr />
            <div className="filter-overlay__body__section filter-overlay__body__section__type">
              <h2>Type of work</h2>
              <form action="">
                <input
                  type="checkbox"
                  value="full-time-only"
                  id="full-time-only"
                />
                <label htmlFor="full-time-only">Full time only</label>
              </form>
            </div>
          </div>
          <div className="filter-overlay__submit">
            <button className="btn btn--apply-filter">Confirm</button>
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
