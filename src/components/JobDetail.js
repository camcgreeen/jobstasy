import { Link } from "react-router-dom";
import React from "react";

class JobDetail extends React.Component {
  render() {
    console.log(this.props);
    return <h1>JobDetail: {this.props.match.params.id}</h1>;
  }
}

export default JobDetail;
