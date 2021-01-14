import { Link } from "react-router-dom";
import React from "react";
import "./main.scss";
import "./Filters.scss";
// import Slider from "@material-ui/core/Slider";
import RangeSlider from "./RangeSlider";

class Filters extends React.Component {
  constructor() {
    super();
    this.state = {
      filtersOpen: false,
      inputSort: "most recent",
      inputSalaryMin: 0,
      inputSalaryMax: 150000,
      inputCompanyTag: "",
      inputFullTimeOnly: false,
      companyTags: [],
    };
  }
  render() {
    const slider = document.getElementById("slider");
    return (
      <>
        <div className="list-info" style={{ marginTop: this.props.marginTop }}>
          <div
            className="filters"
            onClick={() => {
              this.toggleFilters();
              this.toggleNoScroll();
            }}
          >
            {/* <img
              className="filters__img"
              src="https://svgshare.com/i/SxK.svg"
              alt="filter"
            /> */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M15.4055 0H0.65625C0.311035 0 0.03125 0.279785 0.03125 0.625C0.03125 2.36548 0.777344 4.0271 2.07825 5.18347L4.81543 7.61634C5.29004 8.03821 5.56226 8.64441 5.56226 9.27955V15.3743C5.56226 15.8723 6.1189 16.1709 6.53382 15.8942L10.2212 13.436C10.395 13.3201 10.4995 13.125 10.4995 12.916V9.27955C10.4995 8.64441 10.7717 8.03821 11.2463 7.61634L13.9834 5.18347C15.2843 4.0271 16.0304 2.36548 16.0304 0.625C16.0304 0.279785 15.7506 0 15.4055 0ZM13.153 4.24915L10.4159 6.68213C9.67469 7.34107 9.24951 8.28772 9.24951 9.27942V12.5815L6.81214 14.2064V9.27955C6.81214 8.28772 6.38697 7.34107 5.64575 6.68213L2.90869 4.24927C2.03149 3.46936 1.47156 2.40076 1.32166 1.24988H14.74C14.5901 2.40076 14.0303 3.46936 13.153 4.24915Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="filters__text">Filters</p>
          </div>
          <p className="job-number">
            {this.props.jobNumber +
              (this.props.jobNumber > 1 ? " jobs" : " job")}
          </p>
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
                {/* <label htmlFor="sortOptions"> */}
                <select
                  name="sortOptions"
                  id="sortOptions"
                  value={this.state.inputSort}
                  onChange={this.handleChangeSort}
                >
                  <option value="most recent">most recent</option>
                  <option value="salary (high to low)">
                    salary (high to low)
                  </option>
                  <option value="salary (low to high)">
                    salary (low to high)
                  </option>
                </select>
                {/* </label> */}
              </form>
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
                <input
                  id="input-add-company-tag"
                  type="text"
                  placeholder="Search by company"
                  onKeyUp={(e) => this.handleUserInput(e)}
                />
              </div>
              <ul className="filter-overlay__body__section__tags">
                {this.state.companyTags.map((company, i) => {
                  return (
                    <li key={i} onClick={() => this.removeCompanyTag(i)}>
                      {company}
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0)">
                          <path
                            d="M1.63619 1.1719L6.82164 6.35735C6.95175 6.48745 6.95175 6.69864 6.82164 6.82875C6.69153 6.95886 6.48034 6.95886 6.35024 6.82875L1.16478 1.6433C1.03468 1.51319 1.03468 1.302 1.16478 1.1719C1.29489 1.04179 1.50608 1.04179 1.63619 1.1719Z"
                            fill="#4449B0"
                          />
                          <path
                            d="M6.89256 1.7065L1.70711 6.89195C1.577 7.02206 1.36581 7.02206 1.2357 6.89195C1.10559 6.76184 1.10559 6.55066 1.2357 6.42055L6.42115 1.2351C6.55126 1.10499 6.76245 1.10499 6.89256 1.2351C7.02267 1.36521 7.02267 1.5764 6.89256 1.7065Z"
                            fill="#4449B0"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="8"
                              height="8"
                              fill="white"
                              transform="translate(0 8) rotate(-90)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </li>
                  );
                })}
              </ul>
            </div>
            <hr />
            <div className="filter-overlay__body__section">
              <h2>Salary</h2>
              <RangeSlider
                handleChangeSlider={(e, val) => this.handleChangeSlider(e, val)}
                resetSlider={this.resetSlider}
              />
            </div>
            <hr />
            <div className="filter-overlay__body__section filter-overlay__body__section__type">
              <h2>Type of work</h2>
              <form action="">
                <input
                  type="checkbox"
                  // value="full-time-only"
                  id="full-time-only"
                  checked={this.state.inputFullTimeOnly}
                  onChange={this.handleUserCheckbox}
                />
                <label htmlFor="full-time-only">Full time only</label>
              </form>
            </div>
          </div>
          <div className="filter-overlay__submit">
            <button className="btn btn--clear-filter">Clear</button>
            <button className="btn btn--apply-filter">Confirm</button>
          </div>
        </div>
      </>
    );
  }
  handleChangeSlider = (e, val) => {
    const newSalaryMin = val[0];
    const newSalaryMax = val[1];
    this.setState({
      inputSalaryMin: newSalaryMin,
      inputSalaryMax: newSalaryMax,
    });
  };
  // resetSlider = () => {
  //   setValue([0, 150000]);
  // }
  handleChangeSort = (e) => {
    this.setState({ inputSort: e.target.value });
  };
  handleUserInput = (e) => {
    this.setState({ inputCompanyTag: e.target.value });
    e.keyCode === 13
      ? this.addCompanyTag()
      : this.setState({ inputCompanyTag: e.target.value });
  };
  addCompanyTag = () => {
    document.getElementById("input-add-company-tag").value = "";
    console.log("adding company tag", this.state.inputCompanyTag);
    let updatedCompanyTags = [...this.state.companyTags];
    updatedCompanyTags.push(this.state.inputCompanyTag);
    this.setState({
      inputCompanyTag: "",
      companyTags: [...updatedCompanyTags],
    });
  };
  handleUserCheckbox = (e) => {
    this.setState({ inputFullTimeOnly: e.target.checked });
  };
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
  removeCompanyTag = (i) => {
    let updatedCompanyTags = [...this.state.companyTags];
    updatedCompanyTags.splice(i, 1);
    // console.log(updatedCompanyTags);
    this.setState({ companyTags: [...updatedCompanyTags] });
  };
  // componentDidMount = () => {
  //   const slider =
  // }
}

export default Filters;
