import { Link } from "react-router-dom";
import React from "react";
import "./main.scss";
import "./SearchField.scss";

class SearchField extends React.Component {
  render() {
    return (
      <div className="search-field-bg">
        <div className="search-field">
          <h1 className="h1">Find your next job</h1>
          {
            // LINK TO COMPANY URLs HERE
          }
          <h2 className="h2">
            Land a job at companies like{" "}
            <a
              href="https://vonq.io/3mTLc4w"
              target="_blank"
              rel="noreferrer noopener"
              className="h2__company"
              // style={{textDecoration}}
            >
              company1
            </a>
            ,{" "}
            <a
              href="https://vonq.io/3mTLc4w"
              target="_blank"
              rel="noreferrer noopener"
              className="h2__company"
              // style={{textDecoration}}
            >
              {"company2 "}
            </a>
            {"and "}
            <a
              href="https://vonq.io/3mTLc4w"
              target="_blank"
              rel="noreferrer noopener"
              className="h2__company"
              // style={{textDecoration}}
            >
              company3
            </a>
          </h2>
          <div className="inputs">
            <div className="inputs__description">
              <img
                className="inputs__description__img"
                src="https://svgshare.com/i/SnX.svg"
                alt="search"
              />
              <input
                className="inputs__description__input"
                type="text"
                placeholder='Job description ("react", "front-end")'
              />
            </div>
            <div className="inputs__location">
              <img
                className="inputs__location__img"
                src="https://svgshare.com/i/Sn2.svg"
                alt="search"
              />
              <input
                className="inputs__location__input"
                type="text"
                placeholder='Location ("city", "country")'
              />
            </div>
            <button className="btn btn--search">Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchField;
