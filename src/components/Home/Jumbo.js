import React from 'react';

const Jumbo = () => {
  return (
    <div className="jumbo">
      <img 
        className="jumboImg"
        src={require('../../assets/images/devfloorjumbo.png')}
        alt="developer on floor"
      />

      <a className="explore" href="#snippets">
        <button className="exploreBtn">Explore</button>
      </a>
    </div>
  );
};

export default Jumbo;