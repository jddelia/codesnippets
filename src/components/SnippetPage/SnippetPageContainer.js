import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import SnippetPage from './SnippetPage';

const SnippetPageContainer = ({ history, match }) => {
  const [snippet, setSnippet] = useState(null);

  history.listen(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    function fetchData() {
      axios.get(`https://codesnippetapi.herokuapp.com/snippets/snippet/${match.params.id}`)
        .then(response => {
          setSnippet(response.data[0]);
        })
        .catch(err => {
          throw err;
        });
    }

    fetchData();
  }, [setSnippet]);

  return (
    <>
      <SnippetPage snippet={snippet} />
    </>
  );
};

export default withRouter(SnippetPageContainer);