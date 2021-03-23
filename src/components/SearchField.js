import React from 'react';
import './main.scss';
import './Jobs.scss';
import './SearchField.scss';

class SearchField extends React.Component {
  constructor() {
    super();
    this.state = {
      inputDescription: '',
      inputLocation: '',
      renderCompanyNames: false,
    };
  }
  render() {
    return (
      <div className='search-field-bg'>
        <div className='container'>
          <div className='search-field'>
            <h1 className='h1'>Find your next job in software</h1>
            <h2
              className='h2'
              style={{
                visibility: this.state.renderCompanyNames
                  ? 'visible'
                  : 'hidden',
              }}
            >
              Get a job at companies like{' '}
              <a
                href={this.props.companyNames[0].company_url}
                target='_blank'
                rel='noreferrer noopener'
                className='h2__company'
              >
                {this.props.companyNames[0].company}
              </a>
              {this.props.companyNames[1].company !== '' && ', '}
              <a
                href={this.props.companyNames[1].company_url}
                target='_blank'
                rel='noreferrer noopener'
                className='h2__company'
              >
                {this.props.companyNames[1].company + ' '}
              </a>
              {this.props.companyNames[2].company !== '' && 'and '}
              <a
                href={this.props.companyNames[2].company_url}
                target='_blank'
                rel='noreferrer noopener'
                className='h2__company'
              >
                {this.props.companyNames[2].company}
              </a>
            </h2>
            <div className='inputs' id='search-field-inputs'>
              <div className='inputs__description'>
                <img
                  className='inputs__description__img'
                  src='https://svgshare.com/i/SnX.svg'
                  alt='search'
                />
                <input
                  className='inputs__description__input'
                  id='input-description'
                  type='text'
                  placeholder='Job description ("react", "front-end")'
                  onKeyUp={(e) => this.handleUserInput('description', e)}
                />
                <svg
                  className={
                    this.state.inputDescription === '' ||
                    /^\s+$/g.test(this.state.inputDescription)
                      ? 'inputs__description__clear'
                      : 'inputs__description__clear visible'
                  }
                  onClick={async () => {
                    document.getElementById('input-description').value = '';
                    await this.setState({ inputDescription: '' });
                    this.props.updateSearchState([
                      this.state.inputDescription,
                      this.state.inputLocation,
                    ]);
                  }}
                  height='24'
                  viewBox='0 0 512 512'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='m256 512c-141.160156 0-256-114.839844-256-256s114.839844-256 256-256 256 114.839844 256 256-114.839844 256-256 256zm0-475.429688c-120.992188 0-219.429688 98.4375-219.429688 219.429688s98.4375 219.429688 219.429688 219.429688 219.429688-98.4375 219.429688-219.429688-98.4375-219.429688-219.429688-219.429688zm0 0' />
                  <path d='m347.429688 365.714844c-4.679688 0-9.359376-1.785156-12.929688-5.359375l-182.855469-182.855469c-7.144531-7.144531-7.144531-18.714844 0-25.855469 7.140625-7.140625 18.714844-7.144531 25.855469 0l182.855469 182.855469c7.144531 7.144531 7.144531 18.714844 0 25.855469-3.570313 3.574219-8.246094 5.359375-12.925781 5.359375zm0 0' />
                  <path d='m164.570312 365.714844c-4.679687 0-9.355468-1.785156-12.925781-5.359375-7.144531-7.140625-7.144531-18.714844 0-25.855469l182.855469-182.855469c7.144531-7.144531 18.714844-7.144531 25.855469 0 7.140625 7.140625 7.144531 18.714844 0 25.855469l-182.855469 182.855469c-3.570312 3.574219-8.25 5.359375-12.929688 5.359375zm0 0' />
                </svg>
              </div>
              <div className='inputs__location'>
                <img
                  className='inputs__location__img'
                  src='https://svgshare.com/i/Sn2.svg'
                  alt='search'
                />
                <input
                  className='inputs__location__input'
                  id='input-location'
                  type='text'
                  placeholder='Location (city, country)'
                  onKeyUp={(e) => this.handleUserInput('location', e)}
                />
                <svg
                  className={
                    this.state.inputLocation === '' ||
                    /^\s+$/g.test(this.state.inputLocation)
                      ? 'inputs__location__clear'
                      : 'inputs__location__clear visible'
                  }
                  onClick={async () => {
                    document.getElementById('input-location').value = '';
                    await this.setState({ inputLocation: '' });
                    this.props.updateSearchState([
                      this.state.inputDescription,
                      this.state.inputLocation,
                    ]);
                  }}
                  height='24'
                  viewBox='0 0 512 512'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='m256 512c-141.160156 0-256-114.839844-256-256s114.839844-256 256-256 256 114.839844 256 256-114.839844 256-256 256zm0-475.429688c-120.992188 0-219.429688 98.4375-219.429688 219.429688s98.4375 219.429688 219.429688 219.429688 219.429688-98.4375 219.429688-219.429688-98.4375-219.429688-219.429688-219.429688zm0 0' />
                  <path d='m347.429688 365.714844c-4.679688 0-9.359376-1.785156-12.929688-5.359375l-182.855469-182.855469c-7.144531-7.144531-7.144531-18.714844 0-25.855469 7.140625-7.140625 18.714844-7.144531 25.855469 0l182.855469 182.855469c7.144531 7.144531 7.144531 18.714844 0 25.855469-3.570313 3.574219-8.246094 5.359375-12.925781 5.359375zm0 0' />
                  <path d='m164.570312 365.714844c-4.679687 0-9.355468-1.785156-12.925781-5.359375-7.144531-7.140625-7.144531-18.714844 0-25.855469l182.855469-182.855469c7.144531-7.144531 18.714844-7.144531 25.855469 0 7.140625 7.140625 7.144531 18.714844 0 25.855469l-182.855469 182.855469c-3.570312 3.574219-8.25 5.359375-12.929688 5.359375zm0 0' />
                </svg>
              </div>
              <button
                className='btn btn--search'
                onClick={() =>
                  this.props.updateSearchState([
                    this.state.inputDescription,
                    this.state.inputLocation,
                  ])
                }
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    // if (
    //   this.props.companyNames[0].company !== '' ||
    //   this.props.companyNames[1].company !== '' ||
    //   this.props.companyNames[2].company !== ''
    // ) {
    //   console.log('updating');
    //   this.setState({ renderCompanyNames: true });
    // }
  };
  componentDidUpdate = (prevProps, prevState) => {
    // if (this.props.length !== prevProps.length) {
    // if (
    //   this.props.companyNames[0].company !== '' ||
    //   this.props.companyNames[1].company !== '' ||
    //   this.props.companyNames[2].company !== ''
    // ) {
    //   console.log('updating');
    // this.setState({ renderCompanyNames: true });
    // }
    // }
    if (
      prevProps.companyNames[0].company !==
        this.props.companyNames[0].company ||
      prevProps.companyNames[1].company !==
        this.props.companyNames[1].company ||
      prevProps.companyNames[2].company !== this.props.companyNames[2].company
    ) {
      this.setState({ renderCompanyNames: true });
    }
  };
  handleUserInput = (type, e) => {
    switch (type) {
      case 'description':
        this.setState({ inputDescription: e.target.value });
        e.keyCode === 13
          ? this.props.updateSearchState([
              this.state.inputDescription,
              this.state.inputLocation,
            ])
          : this.setState({ inputDescription: e.target.value });
        break;
      case 'location':
        this.setState({ inputLocation: e.target.value });
        e.keyCode === 13
          ? this.props.updateSearchState([
              this.state.inputDescription,
              this.state.inputLocation,
            ])
          : this.setState({ inputLocation: e.target.value });
        break;
      default:
        break;
    }
  };
}

export default SearchField;
