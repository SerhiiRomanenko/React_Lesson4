import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsAuthor extends Component {
  render() {
    const { author } = this.props;
    return (
      <p className="newsPage__author">
        <b>Author: </b>
        {author}
      </p>
    );
  }
}

NewsAuthor.propTypes = {
  author: PropTypes.string,
};

NewsAuthor.defaultProps = {
  author: "not specified",
};
