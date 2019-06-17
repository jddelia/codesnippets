import React from 'react';
import { withRouter } from 'react-router-dom';

import Jumbo from './Jumbo';
import Snippets from './Snippets/Snippets';

const Home = ({ history }) => {
  history.listen(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="homeContainer">
      <Jumbo />
      <Snippets />
    </div>
  );
};

export default withRouter(Home);