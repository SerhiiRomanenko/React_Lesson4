import React, { Component } from "react";
import PropsTypes from "prop-types";

export class NewsContent extends Component {
  render() {
    const { content } = this.props;
    return (
      <p
        className="newsPage__description"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }
}

NewsContent.propsTypes = {
  content: PropsTypes.string.isRequired,
};

NewsContent.defaultProps = {};
