import React, { useState } from 'react';

import SearchHeader from './SearchHeader';
import SearchInput from './SearchInput';
import SearchContainer from './SearchContainer';

const Search = () => {
  const [searchFilter, setSearchFilter] = useState('')

  return (
    <div className="search">
      <SearchHeader />
      <SearchInput onClick={setSearchFilter} />
      <SearchContainer searchFilter={searchFilter} />
    </div>
  );
};

export default Search;