import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsCategories extends Component {
  render() {
    const { categories } = this.props;
    // console.log(categories);
    return (
      <>
        {categories && (
          <p className="newsPage__categories">
            <b>Categories: </b>
            {categories.map((i) => {
              return (
                <span key={i.id} className="newsPage__catogorieItem">
                  {i.name}
                </span>
              );
            })}
          </p>
        )}
      </>
    );
  }
}

NewsCategories.propTypes = {
  categories: PropTypes.array,
};

NewsCategories.defaultProps = {
  categories: [],
};
