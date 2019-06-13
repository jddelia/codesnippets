import React from 'react';

import SearchResult from './SearchResult';
import SearchDialog from './SearchDialog';

import { useSnippetsContext } from '../../contexts/SnippetsContext';

const SearchContainer = ({ searchFilter }) => {
  const filteredSnippets = useSnippetsContext().filter(snippet => {
    return snippet.title.toLowerCase().includes(searchFilter.toLowerCase());
  });

  const searchResults = filteredSnippets.map(snippet => {
    return (
      <SearchResult
        key={snippet._id}
        id={snippet._id}
        title={snippet.title}
        shortDesc={snippet.shortDesc}
      />
    )
  });

  const searchDisplay = searchFilter ? (
    <>
      <SearchDialog
        searchEntered={true}
        totalResults={searchResults.length}
      />
      {searchResults}
    </>
  ) : (
    <>
      <SearchDialog
        searchEntered={false}
        totalResults={0}
      />
    </>
  );

  return (
    <div className="searchContainer">
      {searchDisplay}
    </div>
  );
};

export default SearchContainer;