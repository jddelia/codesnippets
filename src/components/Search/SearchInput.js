import React, { useRef } from 'react';

const SearchInput = ({ onClick }) => {
  const inputRef = useRef();
  
  function handleClick() {
    onClick(inputRef.current.value);
  }

  return (
    <div className="searchBar">
      <input
        ref={inputRef}
        className="searchInput"
        type="text"
        placeholder="Search"
      />

      <button className="searchBtn" onClick={handleClick}>
        <span>
          <i className="fas fa-search"></i>
        </span>
      </button>
    </div>
  );
};

export default SearchInput;