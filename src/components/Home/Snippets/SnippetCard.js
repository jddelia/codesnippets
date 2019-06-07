import React from 'react';

const SnippetCard = ({ title, shortDesc }) => {
  return (
    <div className="snippetItem">
      <div className="itemTitle">
        {title}
      </div>

      <div className="itemDesc">
        {shortDesc}
      </div>

      <button className="readMoreBtn">Read More</button>
    </div>
  );
};

export default SnippetCard;