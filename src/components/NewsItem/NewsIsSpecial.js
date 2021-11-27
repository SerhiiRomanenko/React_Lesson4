import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsIsSpecial extends Component {
  render() {
    const { isSpecial } = this.props;
    return (
      <p className="newsPage__isSpecial">
        {isSpecial ? "Особая новость ✅" : "Обычная новость ❌"}
      </p>
    );
  }
}

NewsIsSpecial.propTypes = {
  isSpecial: PropTypes.bool.isRequired,
};

NewsIsSpecial.defaultProps = {};
