import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import "./main.scss";
import "./Jobs.scss";
import Navbar from "./Navbar";
import SearchField from "./SearchField";
import Filters from "./Filters";
import JobList from "./JobList";
import Pagination from "./Pagination";
import Contact from "./Contact";
import Footer from "./Footer";

class Jobs extends React.Component {
  constructor() {
    super();
    this.scrollDiv = React.createRef();
    this.state = {
      loaded: false,
      prevJobs: [],
      jobs: [],
      prevSearchType: "automatic",
      searchType: "automatic",
      description: "",
      location: "",
      sort: "most recent",
      salaryValue: [0, 80000],
      fullTimeOnly: false,
      companyTags: [],
      defaultJobs: [],
      companyNames: [
        { company: "", company_url: "" },
        { company: "", company_url: "" },
        { company: "", company_url: "" },
      ],
      searchedJobs: [],
      currentPage: 1,
      jobsPerPage: 10,
    };
  }
  // scrollToContent = () => {
  //   this.jobListScroll.scrollIntoView({ behavior: "smooth" });
  // };
  render() {
    // Get current posts
    const indexOfLastJob = this.state.currentPage * this.state.jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - this.state.jobsPerPage;
    const currentJobs = this.state.jobs.slice(indexOfFirstJob, indexOfLastJob);

    // // Change page
    // const paginate = pageNumber => setCurrentPage(pageNumber);
    // const {defaultJobs} = this.state
    return (
      <>
        <Navbar />
        <SearchField
          // defaultJobList={this.state.companyNames}
          companyNames={this.state.companyNames}
          updateSearchState={this.updateSearchState}
        />
        <div className="container">
          <div id="scroll-to"></div>
          <Filters
            jobNumber={this.state.jobs.length}
            updateFilterState={this.updateFilterState}
            ref={this.scrollDiv}
          />
          <JobList jobs={currentJobs} />
          {this.state.jobs.length > 0 && (
            <Pagination
              jobsPerPage={this.state.jobsPerPage}
              totalJobs={this.state.jobs.length}
              paginate={this.paginate}
              currentPage={this.state.currentPage}
            />
          )}
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
  paginate = async (pageNumber) => {
    await this.setState({ currentPage: pageNumber });
    // const scrollTo = document.querySelector(".scroll-to");
    // window.scrollTo({
    //   behavior: "smooth",
    //   // left: 0,
    //   top: scrollTo.top,
    // });
    document.getElementById("scroll-to").scrollIntoView({ behavior: "smooth" });
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
    jobs = this.addAttributes(jobs.data);
    jobs = this.applyFilters(jobs);
    console.log(jobs);
    await this.setState({ currentPage: 1, jobs });
    // this.scrollToContent();
    // this.scrollDiv.current.scrollIntoView({ behavior: "smooth" });
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
  getRandom = (seed) => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
  convertJobIdToSeed = (id) => {
    let result = 0;
    id.split("").forEach((char) => (result += char.charCodeAt(0)));
    return result;
  };
  convertToSalary = (random) => {
    // generate salary between 25k and 75k
    // const min = Math.floor(25 + randomNum * 50);
    // const max = min + 5;
    // return [min * 1000, max * 1000];
    return Math.floor(45 + random * 15) * 1000;
  };
  addAttributes = (jobs) => {
    jobs = this.addSalary(jobs);
    jobs = this.addApplicants(jobs);
    jobs = this.addApplyBefore(jobs);
    // jobs = this.addTimezones(jobs);
    return jobs;
  };
  generatePersistentSalary = (jobId) => {
    const jobSeed = this.convertJobIdToSeed(jobId);
    const random = this.getRandom(jobSeed);
    return this.convertToSalary(random);
  };
  addSalary = (jobs) => {
    jobs.forEach((job) => {
      // const min = 35000 + this.getRandomInt(10) * 1000;
      // const max = min + this.getRandomInt(10) * 1000;
      const min = this.generatePersistentSalary(job.id);
      const max = min + 5000;
      job.salary_min = min;
      job.salary_max = max;
    });
    return jobs;
  };
  addApplicants = (jobs) => {
    // use getRandom to make persistent
    jobs.forEach((job) => {
      job.applicant_number = 172;
    });
    return jobs;
  };
  addApplyBefore = (jobs) => {
    // always add a month onto the created_at property
    jobs.forEach((job) => {
      job.apply_before = "Mon Jan 18 00:00:00 UTC 2021";
    });
    return jobs;
  };
  // addTimezones = (jobs) => {
  //   let timezones = ["GMT", "GMT + 1", "GMT + 2"];
  //   // jobs.forEach((job) => {
  //   //   job.timezones = timezones;
  //   // });
  //   // return jobs;

  //   jobs.forEach((job) => {
  //     // job.timezones = ["GMT", "GMT + 1", "GMT + 2"];
  //     job.timezones = "GMT, GMT + 1, GMT + 2";
  //   });
  //   return jobs;
  // };
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
