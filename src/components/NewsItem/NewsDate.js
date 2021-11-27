import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

export class NewsDate extends Component {
  render() {
    const { dateCreated } = this.props;
    return (
      <p className="newsPage__date">
        <b>Date of creation: </b>
        <Moment format="DD.MM.YYYY">{dateCreated.slice(0, 19)}</Moment>
      </p>
    );
  }
}

NewsDate.propTypes = {
  dateCreated: PropTypes.string.isRequired,
};

NewsDate.defaultProps = {};
