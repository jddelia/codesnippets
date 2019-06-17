import React from 'react';
import { withRouter } from 'react-router-dom';

const About = ({ history }) => {
  history.listen(() => {
    window.scrollTo(0, 1);
  });

  return (
    <div className="about">
      <p className="aboutText">
        This app was created by <a href="https://jdeliaportfolio.netlify.com/">JDelia</a>.
        CodeSnippets is a collection of useful snippets
        of code, and information regarding programming.
      </p>
    </div>
  );
};

export default withRouter(About);