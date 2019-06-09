import React from 'react';

const dialogStyles = {
  noSearch: {
    height: `41vh`
  },
  searchEntered: {
    height: `8vh`
  }
}

const SearchDialog = ({ searchEntered, totalResults }) => {
  const display = searchEntered ? (
    <p className="searchDialog" style={dialogStyles.searchEntered}>
      Displaying {totalResults} result(s).
    </p>
  ) : (
    <p className="searchDialog" style={dialogStyles.noSearch}>
      Use the search, to find snippets.
    </p>
  );

  return display;
};

export default SearchDialog;