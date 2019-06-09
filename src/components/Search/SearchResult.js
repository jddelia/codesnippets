import React from 'react';

const SearchResult = ({ title, shortDesc }) => {
  return (
    <div className="resultCard">
      <div className="resultCardTitle">
        {title}
      </div>

      <div className="resultDesc">
        {`${shortDesc.substr(0, 100)}...`}
      </div>

      <button className="readMoreBtn">Read More</button>
    </div>
  );
};

export default SearchResult;