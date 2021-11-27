import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsTitle extends Component {
  render() {
    const { title } = this.props;
    return (
      <h3 className="newsPage__title" style={{ color: "red" }}>
        {title.toUpperCase()}
      </h3>
    );
  }
}

NewsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
NewsTitle.defaultProps = {};
