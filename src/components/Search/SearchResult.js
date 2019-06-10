import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ title, shortDesc, id }) => {
  return (
    <div className="resultCard">
      <div className="resultCardTitle">
        {title}
      </div>

      <div className="resultDesc">
        {`${shortDesc.substr(0, 100)}...`}
      </div>

      <Link to={`/snippets/${id}`}
        className="readMoreLink"
      >
        <button className="readMoreBtn">Read More</button>
      </Link>
    </div>
  );
};

export default SearchResult;