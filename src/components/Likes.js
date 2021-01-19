import { Link } from "react-router-dom";
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
              {this.state.nickname.split("")[0]}
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
      // console.log("change");
      await this.setState({ filteredJobs: this.state.likedJobs });

      this.applyFilters(this.state.likedJobs);
    }
  };
  paginate = async (pageNumber) => {
    await this.setState({ currentPage: pageNumber });
    // const scrollTo = document.querySelector(".scroll-to");
    // window.scrollTo({
    //   behavior: "smooth",
    //   // left: 0,
    //   top: scrollTo.top,
    // });
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
  // paginate = async (pageNumber) => {
  //   await this.setState({ currentPage: pageNumber });
  //   // const scrollTo = document.querySelector(".scroll-to");
  //   // window.scrollTo({
  //   //   behavior: "smooth",
  //   //   // left: 0,
  //   //   top: scrollTo.top,
  //   // });
  //   document.getElementById("scroll-to").scrollIntoView({ behavior: "smooth" });
  // };
  updateFilterState = (filterState) => {
    this.setState({
      sort: filterState[0],
      salaryValue: [...filterState[1]],
      fullTimeOnly: filterState[2],
      companyTags: [...filterState[3]],
    });
  };
  sortJobs = (jobs, sortBy) => {
    switch (sortBy) {
      case "most recent":
        return jobs.sort(
          (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)
        );
      case "salary (high to low)":
        return jobs.sort((a, b) => Number(b.salary_max) - Number(a.salary_max));
      case "salary (low to high)":
        return jobs.sort((a, b) => Number(a.salary_min) - Number(b.salary_min));
      default:
        return [];
    }
  };
  filterJobsByCompany = (jobs, searchTerms) => {
    return jobs.filter((job) => {
      const keywords = job.company.toLowerCase().split(" ");
      let matchFound = false;
      // nested loop mxn complexity, but m and n will always be very low
      searchTerms.forEach((searchTerm) => {
        keywords.forEach((keyword) => {
          if (keyword === searchTerm.toLowerCase()) {
            matchFound = true;
            return;
          }
        });
      });
      return matchFound;
    });
  };
  filterJobsBySalary = (jobs, userMin, userMax) => {
    return jobs.filter((job) => {
      return (
        (job.salary_max >= userMin || job.salary_min >= userMin) &&
        (job.salary_min <= userMax || job.salary_max <= userMax)
      );
    });
  };
  filterJobsByFullTime = (jobs) => {
    return jobs.filter((job) => job.type === "Full Time");
  };
  applyFilters = async (jobs) => {
    await this.setState({ noJobsFound: false });
    // let firstFilter = false;
    console.log("applying filters to ", jobs);
    // if (
    //   this.state.sort === "most recent" &&
    //   JSON.stringify(this.state.salaryValue) === JSON.stringify([0, 150000]) &&
    //   this.state.fullTimeOnly === false &&
    //   JSON.stringify(this.state.companyTags) === JSON.stringify([])
    // ) {
    //   console.log("SOMETHING NEW");
    //   // const originalJobs = [...this.state.jobs];
    //   return [...this.state.prevJobs];
    // } else {
    let filteredJobs = [...this.state.filteredJobs];
    filteredJobs = this.sortJobs(filteredJobs, this.state.sort);
    if (this.state.companyTags.length > 0) {
      filteredJobs = this.filterJobsByCompany(
        filteredJobs,
        this.state.companyTags
      );
    }
    filteredJobs = this.filterJobsBySalary(
      filteredJobs,
      this.state.salaryValue[0],
      this.state.salaryValue[1]
    );
    filteredJobs = this.state.fullTimeOnly
      ? this.filterJobsByFullTime(filteredJobs)
      : filteredJobs;
    // this.setState({ filteredJobs }, () => {
    //   this.toggleFilters();
    //   this.toggleNoScroll();
    //   this.props.updateFilterState([this.state.inputSort, this.state.inputSalaryValue, this.state.inputFullTimeOnly, this.state.companyTags]);
    //   console.log(filteredJobs);
    // });
    // return filteredJobs;
    // }
    this.setState({
      filteredJobs,
      noJobsFound: filteredJobs.length === 0 ? true : false,
    });
  };
}

export default Likes;
