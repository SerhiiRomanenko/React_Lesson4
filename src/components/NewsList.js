import React, { Component } from "react";
import { NewsItem } from "./NewsItem";
import PropTypes from "prop-types";

export class NewsList extends Component {
  render() {
    const { newsToRender } = this.props;
    return (
      <div className="newsPage__list">
        {newsToRender.map((el) => {
          return <NewsItem key={el.id} el={el} />;
        })}
      </div>
    );
  }
}

NewsList.propTypes = {
  newsToRender: PropTypes.array.isRequired,
};

NewsList.defaultProps = {};
