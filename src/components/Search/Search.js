import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import SearchHeader from './SearchHeader';
import SearchInput from './SearchInput';
import SearchContainer from './SearchContainer';

const Search = ({ history }) => {
  const [searchFilter, setSearchFilter] = useState('');

  history.listen(() => {
    window.scrollTo(0, 1);
  });

  return (
    <div className="search">
      <SearchHeader />
      <SearchInput onClick={setSearchFilter} />
      <SearchContainer searchFilter={searchFilter} />
    </div>
  );
};

export default withRouter(Search);