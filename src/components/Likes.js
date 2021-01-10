import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import ListInformation from "./ListInformation";
import JobList from "./JobList";
import Footer from "./Footer";
import "./main.scss";
import "./Jobs.scss";
import "./Likes.scss";

class Likes extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="likes-bg">
          <div className="likes-bg__profile">
            <p className="likes-bg__profile__text">X</p>
          </div>
          <h1 className="likes-bg__h1">X's Likes</h1>
        </div>
        <div className="container">
          <ListInformation marginTop="-60px" />
          <JobList />
        </div>
        <Footer />
      </>
    );
  }
}

export default Likes;
