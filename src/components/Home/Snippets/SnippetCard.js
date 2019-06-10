import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
  gridColumn: '2',
  gridRow: '1/3',
  alignSelf: 'center'
};

const SnippetCard = ({ title, shortDesc, id }) => {
  return (
    <div className="snippetItem">
      <div className="itemTitle">
        {title}
      </div>

      <div className="itemDesc">
        {shortDesc}
      </div>

      <Link to={`/snippets/${id}`}
        style={linkStyle}
      >
        <button className="readMoreBtn">Read More</button>
      </Link>
    </div>
  );
};

export default SnippetCard;