import React, { Component } from "react";
import PropTypes from "prop-types";
import { NewsTitle } from "./NewsItem/NewsTitle";
import { NewsContent } from "./NewsItem/NewsContent";
import { NewsDate } from "./NewsItem/NewsDate";
import { NewsCategories } from "./NewsItem/NewsCategories";
import { NewsLink } from "./NewsItem/NewsLink";
import { NewsPhoto } from "./NewsItem/NewsPhoto";
import { NewsAuthor } from "./NewsItem/NewsAuthor";
import { NewsIsSpecial } from "./NewsItem/NewsIsSpecial";

export class NewsItem extends Component {
  render() {
    let { el } = this.props;
    return (
      <div
        key={el.id}
        className="newsPage__item"
        style={{ border: "1px solid blue", borderCollapse: "collapse" }}
      >
        <NewsTitle title={el.title} />
        <NewsContent content={el.content} />
        <NewsDate dateCreated={el.dateCreated} />
        <NewsCategories categories={el.categories} />
        <NewsLink link={el.link} />
        <NewsPhoto el={el} />
        {/* в фото надо айди для ссилки */}
        <NewsAuthor author={el.author} />
        <NewsIsSpecial isSpecial={el.isSpecial} />
      </div>
    );
  }
}

NewsItem.propTypes = {
  el: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isSpecial: PropTypes.bool.isRequired,
    dateCreated: PropTypes.string.isRequired,
    categories: PropTypes.array,
    link: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    photo: PropTypes.string,
    author: PropTypes.string.isRequired,
  }),
};

NewsItem.defaultProps = {
  el: [],
};
