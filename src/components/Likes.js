import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Filters from "./Filters";
import JobList from "./JobList";
import Contact from "./Contact";
import Footer from "./Footer";
import "./main.scss";
import "./Jobs.scss";
import "./Likes.scss";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
    };
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="likes-bg">
          <div className="likes-bg__profile">
            <p className="likes-bg__profile__text">
              {this.state.nickname.split("")[0]}
            </p>
          </div>
          <h1 className="likes-bg__h1">{this.state.nickname}'s Likes</h1>
        </div>
        <div className="container">
          <Filters />
          {/* <JobList /> */}
        </div>
        <Contact />
        <Footer />
      </>
    );
  }
  componentDidMount = () => {
    this.setState({
      nickname: this.props.location.state.nickname,
    });
  };
}

export default Likes;
