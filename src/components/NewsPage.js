import React, { Component } from "react";
import PropTypes from "prop-types";
import data from "../data/news.json";
import { NewsFilters } from "./NewsFilters";
import { NewsList } from "./NewsList";

export class NewsPage extends Component {
  state = {
    hasPhoto: false,
    hasLink: false,
    isSpecial: false,
    searchText: "",
  };

  handleChangeForPhoto = (newHasPhoto) => {
    this.setState({ hasPhoto: newHasPhoto });
  };

  handleChangeSearchText = (newSearchText) => {
    this.setState({ searchText: newSearchText });
  };

  handleChangeForLink = (newHasLink) => {
    this.setState({ hasLink: newHasLink });
  };

  handleChangeForIsSpecial = (newIsSpecial) => {
    this.setState({ isSpecial: newIsSpecial });
  };

  render() {
    const { hasPhoto, hasLink, isSpecial, searchText } = this.state;
    const newsToRender = data.filter((el) => {
      if (hasPhoto === true && el.photo === null) return false;
      if (hasLink === true && el.link === null) return false;
      if (isSpecial === true && el.isSpecial === false) return false;
      if (
        el.title.indexOf(searchText.toUpperCase()) < 0 &&
        el.content.toUpperCase().indexOf(searchText.toUpperCase()) < 0 &&
        el.author.toUpperCase().indexOf(searchText.toUpperCase()) < 0
      )
        return false;

      return el;
    });

    return (
      <div className="newsPage" style={{ textAlign: "center" }}>
        <NewsFilters
          hasPhoto={hasPhoto}
          hasLink={hasLink}
          isSpecial={isSpecial}
          searchText={searchText}
          handleChangeForPhoto={this.handleChangeForPhoto}
          handleChangeSearchText={this.handleChangeSearchText}
          handleChangeForLink={this.handleChangeForLink}
          handleChangeForIsSpecial={this.handleChangeForIsSpecial}
        />
        <NewsList newsToRender={newsToRender} />
      </div>
    );
  }
}

NewsPage.propTypes = {
  hasPhoto: PropTypes.bool.isRequired,
  hasLink: PropTypes.bool.isRequired,
  isSpecial: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  handleChangeForPhoto: PropTypes.func.isRequired,
  handleChangeSearchText: PropTypes.func.isRequired,
  handleChangeForLink: PropTypes.func.isRequired,
  handleChangeForIsSpecial: PropTypes.func.isRequired,
};

NewsPage.defaultProps = {
  hasPhoto: false,
  hasLink: false,
  isSpecial: false,
  searchText: "",
};
