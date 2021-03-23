import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import SearchField from './SearchField';
import Filters from './Filters';
import JobList from './JobList';
import Pagination from './Pagination';
import Contact from './Contact';
import Footer from './Footer';
import {
  disableRightMiddleClick,
  getRandom,
  convertJobIdToSeed,
  convertToSalary,
  urlRegex,
  sortJobs,
  filterJobsByCompany,
  filterJobsBySalary,
  filterJobsByFullTime,
} from '../utilities/helper';
import './main.scss';
import './Jobs.scss';
const firebase = require('firebase');

class Jobs extends React.Component {
  constructor() {
    super();
    this.scrollDiv = React.createRef();
    this.state = {
      email: '',
      nickname: '',
      loaded: false,
      jobs: [],
      searchedJobs: [],
      description: '',
      location: '',
      sort: 'most recent',
      salaryValue: [0, 80000],
      fullTimeOnly: false,
      companyTags: [],
      defaultJobs: [],
      companyNames: [
        { company: '', company_url: '' },
        { company: '', company_url: '' },
        { company: '', company_url: '' },
      ],
      searchedJobs: [],
      currentPage: 1,
      jobsPerPage: 10,
      noJobsFound: false,
    };
  }
  render() {
    const indexOfLastJob = this.state.currentPage * this.state.jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - this.state.jobsPerPage;
    const currentJobs = this.state.jobs.slice(indexOfFirstJob, indexOfLastJob);
    return (
      <>
        <Navbar email={this.state.email} nickname={this.state.nickname} />
        <SearchField
          companyNames={this.state.companyNames}
          updateSearchState={this.updateSearchState}
        />
        <div className='container'>
          <div id='scroll-to'></div>
          <Filters
            jobNumber={this.state.jobs.length}
            updateFilterState={this.updateFilterState}
            ref={this.scrollDiv}
          />
          <JobList
            jobs={currentJobs}
            noJobsFound={this.state.noJobsFound}
            email={this.state.email}
            nickname={this.state.nickname}
            type={'jobs'}
          />
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
        <Footer email={this.state.email} nickname={this.state.nickname} />
      </>
    );
  }
  componentDidMount = async () => {
    disableRightMiddleClick();
    setTimeout(() => {
      firebase.auth().onAuthStateChanged(async (_usr) => {
        if (!_usr) {
          this.props.history.push('/login');
        } else {
          firebase
            .firestore()
            .collection('users')
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
    await this.getJobs();
    const companyNames = this.checkCompanyUrlExists(this.state.jobs);
    await this.setState({ companyNames });
  };
  componentDidUpdate = async (prevProps, prevState) => {
    if (
      prevState.description !== this.state.description ||
      prevState.location !== this.state.location
    ) {
      this.getJobs();
    }
    if (
      prevState.sort !== this.state.sort ||
      JSON.stringify(prevState.salaryValue) !==
        JSON.stringify(this.state.salaryValue) ||
      prevState.fullTimeOnly !== this.state.fullTimeOnly ||
      JSON.stringify(prevState.companyTags) !==
        JSON.stringify(this.state.companyTags)
    ) {
      if (this.state.description !== '' || this.state.location !== '') {
        this.getJobs();
      } else {
        await this.setState({ noJobsFound: false });
        const filteredJobs = this.applyFilters(this.state.searchedJobs);
        if (filteredJobs.length === 0) {
          await this.setState({ noJobsFound: true });
        }
        this.setState({ jobs: filteredJobs, currentPage: 1 });
      }
    }
    if (
      (prevState.description !== this.state.description &&
        this.state.description !== '') ||
      (prevState.location !== this.state.location && this.state.location !== '')
    ) {
      const element = document.getElementById('search-field-inputs');
      const offset = 0;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  paginate = async (pageNumber) => {
    await this.setState({ currentPage: pageNumber });
    const element = document.getElementById('search-field-inputs');
    const offset = 0;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
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
  getJobs = async () => {
    let jobs = [];
    await this.setState({ jobs, searchedJobs: jobs, noJobsFound: false });
    try {
      jobs = await axios(
        `https://github-jobs-proxy.appspot.com/positions?description=${this.state.description}&location=${this.state.location}`
      );
      await this.setState({ searchedJobs: jobs.data });
      jobs = this.addAttributes(jobs.data);
      jobs = this.applyFilters(jobs);
    } catch (err) {
      jobs = [];
      await this.setState({ jobs, noJobsFound: true });
      return;
    }

    await this.setState({
      currentPage: 1,
      jobs,
      noJobsFound: jobs.length > 0 ? false : true,
    });
  };
  addAttributes = (jobs) => {
    jobs = this.addSalary(jobs);
    jobs = this.addApplicants(jobs);
    return jobs;
  };
  generatePersistentSalary = (jobId) => {
    const jobSeed = convertJobIdToSeed(jobId);
    const random = getRandom(jobSeed);
    return convertToSalary(random);
  };
  generatePersistentApplicantNumber = (jobId) => {
    const jobSeed = convertJobIdToSeed(jobId);
    const random = getRandom(jobSeed);
    return Math.floor(4 + random * 58);
  };
  addSalary = (jobs) => {
    jobs.forEach((job) => {
      const min = this.generatePersistentSalary(job.id);
      const max = min + 5000;
      job.salary_min = min;
      job.salary_max = max;
    });
    return jobs;
  };
  addApplicants = (jobs) => {
    jobs.forEach((job) => {
      job.applicant_number = this.generatePersistentApplicantNumber(job.id);
    });
    return jobs;
  };
  addApplyBefore = (jobs) => {
    const monthInMs = 2629800000;
    const applyInterval = monthInMs * 2.5;
    jobs.forEach((job) => {
      const createdDate = Date.parse(job.created_at);
      const applyBeforeDate = new Date(createdDate + applyInterval);
      job.apply_before = applyBeforeDate;
    });
    return jobs;
  };
  checkCompanyUrlExists = (jobs) => {
    let result = [];
    const regex = urlRegex;
    jobs.forEach((job) => {
      let companyAlreadyInList = false;
      result.every((jobInList) => {
        if (jobInList.company === job.company) {
          companyAlreadyInList = true;
          return;
        }
      });
      if (
        job.company_url !== null &&
        regex.test(job.company_url) &&
        !companyAlreadyInList &&
        result.length < 3
      ) {
        result.push(job);
      }
    });
    return result;
  };
  applyFilters = (jobs) => {
    let filteredJobs = [...jobs];
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
    return filteredJobs;
  };
}

export default Jobs;
