import React from "react";
import Navbar from "./Navbar";
import Filters from "./Filters";
import JobList from "./JobList";
import Contact from "./Contact";
import Footer from "./Footer";
import Pagination from "./Pagination";
import "./main.scss";
import "./Jobs.scss";
import "./Likes.scss";
import {
  disableRightMiddleClick,
  sortJobs,
  filterJobsByCompany,
  filterJobsBySalary,
  filterJobsByFullTime,
} from "../utilities/helper";
const firebase = require("firebase");

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      nickname: "",
      likedJobs: [],
      filteredJobs: [],
      noJobsFound: false,
      sort: "most recent",
      salaryValue: [0, 80000],
      fullTimeOnly: false,
      companyTags: [],
      currentPage: 1,
      jobsPerPage: 10,
    };
  }
  render() {
    const indexOfLastJob = this.state.currentPage * this.state.jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - this.state.jobsPerPage;
    const currentJobs = this.state.filteredJobs.slice(
      indexOfFirstJob,
      indexOfLastJob
    );
    return (
      <>
        <Navbar />
        <div className="likes-bg">
          <div className="likes-bg__profile" id="likes-pp">
            <p className="likes-bg__profile__text">
              {String(this.state.nickname.split("")[0]).toUpperCase()}
            </p>
          </div>
          <h1 className="likes-bg__h1">{this.state.nickname}'s Likes</h1>
        </div>
        <div className="container">
          <div id="scroll-to"></div>
          <Filters
            jobNumber={this.state.likedJobs.length}
            updateFilterState={this.updateFilterState}
            ref={this.scrollDiv}
          />
          <JobList
            jobs={currentJobs}
            noJobsFound={this.state.noJobsFound}
            email={this.state.email}
            nickname={this.state.nickname}
            type={"likes"}
          />
          {this.state.likedJobs.length > 0 && (
            <Pagination
              jobsPerPage={this.state.jobsPerPage}
              totalJobs={this.state.filteredJobs.length}
              paginate={this.paginate}
              currentPage={this.state.currentPage}
            />
          )}
        </div>
        <Contact />
        <Footer email={this.state.email} nickname={this.state.nickname} />
      </>
    );
  }
  componentDidMount = async () => {
    disableRightMiddleClick();
    await this.setState({
      email: this.props.location.state.email,
      nickname: this.props.location.state.nickname,
    });
    this.getLikedJobs();
    setTimeout(() => {
      firebase.auth().onAuthStateChanged(async (_usr) => {
        if (!_usr) {
          this.props.history.push("/login");
        } else {
          firebase
            .firestore()
            .collection("users")
            .doc(_usr.email)
            .get()
            .then(async (doc) => {
              const userData = doc.data();
              await this.setState({
                email: userData.email,
                nickname: userData.nickname,
              });
            });
        }
      });
    }, 270);
  };
  componentDidUpdate = async (prevProps, prevState) => {
    if (
      prevState.sort !== this.state.sort ||
      JSON.stringify(prevState.salaryValue) !==
        JSON.stringify(this.state.salaryValue) ||
      prevState.fullTimeOnly !== this.state.fullTimeOnly ||
      JSON.stringify(prevState.companyTags) !==
        JSON.stringify(this.state.companyTags)
    ) {
      await this.setState({ filteredJobs: this.state.likedJobs });
      this.applyFilters(this.state.likedJobs);
    }
  };
  paginate = async (pageNumber) => {
    await this.setState({ currentPage: pageNumber });
    document.getElementById("likes-pp").scrollIntoView({ behavior: "smooth" });
  };
  getLikedJobs = async () => {
    if (this.state.email) {
      let likedJobs;
      await firebase
        .firestore()
        .collection("jobs")
        .doc(this.state.email)
        .get()
        .then(async (res) => {
          const data = res.data();
          likedJobs = data.likedJobs;
          this.setState({ likedJobs, filteredJobs: likedJobs });
        });
      if (this.state.likedJobs.length === 0) {
        this.setState({ noJobsFound: true });
      }
    }
  };
  updateFilterState = (filterState) => {
    this.setState({
      sort: filterState[0],
      salaryValue: [...filterState[1]],
      fullTimeOnly: filterState[2],
      companyTags: [...filterState[3]],
    });
  };
  applyFilters = async (jobs) => {
    await this.setState({ noJobsFound: false });
    let filteredJobs = [...this.state.filteredJobs];
    filteredJobs = sortJobs(filteredJobs, this.state.sort);
    if (this.state.companyTags.length > 0) {
      filteredJobs = filterJobsByCompany(filteredJobs, this.state.companyTags);
    }
    filteredJobs = filterJobsBySalary(
      filteredJobs,
      this.state.salaryValue[0],
      this.state.salaryValue[1]
    );
    filteredJobs = this.state.fullTimeOnly
      ? filterJobsByFullTime(filteredJobs)
      : filteredJobs;
    this.setState({
      filteredJobs,
      noJobsFound: filteredJobs.length === 0 ? true : false,
    });
  };
}

export default Likes;
