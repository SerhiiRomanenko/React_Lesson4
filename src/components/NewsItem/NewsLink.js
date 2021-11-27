import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsLink extends Component {
  render() {
    const { link } = this.props;

    return (
      <>
        {link && (
          <a href={link} className="newsPage__link">
            {link}
          </a>
        )}
        <br />
      </>
    );
  }
}

NewsLink.propTypes = {
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
};

NewsLink.defaultProps = {
  link: null,
};
