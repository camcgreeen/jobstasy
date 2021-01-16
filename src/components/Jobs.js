import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import "./main.scss";
import "./Jobs.scss";
import Navbar from "./Navbar";
import SearchField from "./SearchField";
import Filters from "./Filters";
import JobList from "./JobList";
import Contact from "./Contact";
import Footer from "./Footer";

class Jobs extends React.Component {
  constructor() {
    super();
    this.state = {
      prevJobs: [],
      jobs: [],
      prevSearchType: "automatic",
      searchType: "automatic",
      description: "",
      location: "",
      sort: "most recent",
      salaryValue: [0, 150000],
      fullTimeOnly: false,
      companyTags: [],
      defaultJobs: [],
      companyNames: [
        { company: "", company_url: "" },
        { company: "", company_url: "" },
        { company: "", company_url: "" },
      ],
      searchedJobs: [],
    };
  }
  render() {
    // const {defaultJobs} = this.state
    return (
      <>
        <Navbar />
        <SearchField
          defaultJobList={this.state.companyNames}
          updateSearchState={this.updateSearchState}
        />
        <div className="container">
          <Filters
            jobNumber={this.state.jobs.length}
            updateFilterState={this.updateFilterState}
          />
          <JobList jobs={this.state.jobs} />
        </div>
        <Contact />
        <Footer />
      </>
    );
  }
  componentDidMount = async () => {
    // console.log(this.searchJobs("node"));
    const defaultJobs = await this.getDefaultJobs();
    // console.log(defaultJobs);
    const companyNames = this.checkCompanyUrlExists(defaultJobs);
    await this.setState({ companyNames, searchType: "automatic" });
    // const automaticJobs = await this.getJobs(this.state.searchType);
    // let prevJobs = await this.getJobs(this.state.searchType);
    // await this.setState({prevJobs});
    // await this.getInitialJobs();
    // this.getJobs(this.state.searchType);
    console.log("component mounted");
    this.getJobs();
  };
  componentDidUpdate = async (prevProps, prevState) => {
    // if (
    //   prevState.description !== this.state.description ||
    //   prevState.location !== this.state.location
    // ) {
    //   let prevSearchType = this.state.searchType;
    //   await this.setState({ prevSearchType, searchType: "searched" });
    //   this.getJobs(this.state.searchType);
    // } else if (
    //   prevState.sort !== this.state.sort ||
    //   prevState.salaryValue !== this.state.salaryValue ||
    //   prevState.fullTimeOnly !== this.state.fullTimeOnly ||
    //   prevState.companyTags !== this.state.companyTags
    // ) {
    //   let prevSearchType = this.state.searchType;
    //   await this.setState({ prevSearchType, searchType: "filtered" });
    //   this.getJobs(this.state.searchType);
    //   console.log("SOMETHING", this.state.companyTags);
    if (
      prevState.description !== this.state.description ||
      prevState.location !== this.state.location ||
      prevState.sort !== this.state.sort ||
      JSON.stringify(prevState.salaryValue) !==
        JSON.stringify(this.state.salaryValue) ||
      prevState.fullTimeOnly !== this.state.fullTimeOnly ||
      JSON.stringify(prevState.companyTags) !==
        JSON.stringify(this.state.companyTags)
    ) {
      console.log("change");
      this.getJobs();
    }
    // if (
    //   prevState.description !== this.state.description ||
    //   prevState.location !== this.state.location
    // ) {
    //   let prevSearchType = this.state.searchType;
    //   await this.setState({ prevSearchType, searchType: "searched" });
    //   this.getJobs(this.state.searchType);
    // }
  };

  updateSearchState = (searchState) => {
    this.setState({ description: searchState[0], location: searchState[1] });
  };
  updateFilterState = (filterState) => {
    this.setState({
      sort: filterState[0],
      salaryValue: [...filterState[1]],
      fullTimeOnly: filterState[2],
      companyTags: [...filterState[3]],
    });
  };
  getInitialJobs = async () => {
    let jobs = await axios("/positions.json");
    jobs = this.addSalary(jobs.data);
    this.setState({ prevJobs: jobs, jobs });
  };
  // getJobs = async (searchType) => {
  //   let prevJobs = [...this.state.jobs];
  //   let jobs = [];
  //   switch (searchType) {
  //     case "automatic":
  //       await this.setState({ jobs });
  //       jobs = await axios("/positions.json");
  //       jobs = this.addSalary(jobs.data);
  //       break;
  //     case "searched":
  //       await this.setState({ prevJobs, jobs });
  //       jobs = await axios(
  //         `/positions.json?description=${this.state.description}&location=${this.state.location}`
  //       );
  //       jobs = this.addSalary(jobs.data);
  //       break;
  //     case "filtered":
  //       jobs = this.state.jobs;
  //       jobs = this.applyFilters(jobs);
  //       break;
  //     default:
  //       break;
  //   }
  //   this.setState({ jobs });
  // };
  getJobs = async () => {
    let jobs = [];
    console.log(
      "getJobs called with following request: ",
      `/positions.json?description=${this.state.description}&location=${this.state.location}`
    );
    await this.setState({ jobs });
    jobs = await axios(
      `/positions.json?description=${this.state.description}&location=${this.state.location}`
    );
    jobs = this.addSalary(jobs.data);
    jobs = this.applyFilters(jobs);
    console.log(jobs);
    this.setState({ jobs });
  };
  // THIS WILL NEED REVISION BEFORE DEPLOYMENT
  // USING CORS WORK-AROUND
  getDefaultJobs = async () => {
    // axios("/positions.json").then((response) => {
    //   // console.log(response.data);
    //   return response.data;
    // });
    const response = await axios("/positions.json");
    return response.data;
  };
  addSalary = (jobs) => {
    jobs.forEach((job) => {
      job.salary_min = 55000;
      job.salary_max = 65000;
    });
    // console.log(jobs);
    return jobs;
  };
  searchJobs = async (query) => {
    // console.log(query);
    // const response = await fetch(
    //   `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${query}`
    // );
    // const response = await fetch(`/positions.json?search=${query}`);
    // return await response;
    axios(`/positions.json?search=${query}`).then((response) => {
      // console.log(response);
    });
  };
  checkCompanyUrlExists = (jobs) => {
    let result = [];
    let count = 0;
    jobs.forEach((job) => {
      if (job.company_url !== null && count < 3) {
        result.push(job);
        count++;
      }
    });
    // console.log(result);
    return result;
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
  applyFilters = (jobs) => {
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
    let filteredJobs = [...jobs];
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
    return filteredJobs;
    // }
  };
}

export default Jobs;
