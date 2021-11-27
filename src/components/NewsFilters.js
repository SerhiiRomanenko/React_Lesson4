import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsFilters extends Component {
  render() {
    let {
      hasPhoto,
      hasLink,
      isSpecial,
      searchText,
      handleChangeForPhoto,
      handleChangeSearchText,
      handleChangeForLink,
      handleChangeForIsSpecial,
    } = this.props;

    return (
      <div className="newsPage__filters filter">
        <label>
          <span>Filter by photo</span>
          <input
            className="filter__byPhoto"
            type="checkbox"
            onChange={() => handleChangeForPhoto(!hasPhoto)}
          />
        </label>
        <label>
          <span>Filter by link</span>
          <input
            className="filter__byLink"
            type="checkbox"
            onChange={() => handleChangeForLink(!hasLink)}
          />
        </label>
        <label>
          <span>Filter by is specail</span>
          <input
            className="filter__byIsSpecial"
            type="checkbox"
            onChange={() => handleChangeForIsSpecial(!isSpecial)}
          />
        </label>
        <input
          className="filter__byText"
          type="text"
          placeholder="Введите текст для поиска"
          value={searchText}
          onChange={(e) => handleChangeSearchText(e.target.value)}
        />
      </div>
    );
  }
}

NewsFilters.propTypes = {
  hasPhoto: PropTypes.bool.isRequired,
  hasLink: PropTypes.bool.isRequired,
  isSpecial: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  handleChangeForPhoto: PropTypes.func.isRequired,
  handleChangeSearchText: PropTypes.func.isRequired,
  handleChangeForLink: PropTypes.func.isRequired,
  handleChangeForIsSpecial: PropTypes.func.isRequired,
};

NewsFilters.defaultProps = {
  hasPhoto: false,
  hasLink: false,
  isSpecial: false,
  searchText: "",
};
