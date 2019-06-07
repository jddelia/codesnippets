import React from 'react';

import Jumbo from './Jumbo';
import Snippets from './Snippets/Snippets';

const Home = () => {
  return (
    <div className="homeContainer">
      <Jumbo />
      <Snippets />
    </div>
  );
};

export default Home;