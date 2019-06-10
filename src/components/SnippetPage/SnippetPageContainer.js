import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import SnippetPage from './SnippetPage';

const SnippetPageContainer = ({ history, match }) => {
  const [snippet, setSnippet] = useState(null);

  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });

    function fetchData(url) {
      axios.get(url)
        .then(response => {
          setSnippet(response.data[0]);
        })
        .catch(err => {
          throw err;
        });
    }

    fetchData(`https://codesnippetapi.herokuapp.com/snippets/snippet/${match.params.id}`);
  }, [setSnippet]);

  return (
    <>
      <SnippetPage snippet={snippet} />
    </>
  );
};

export default withRouter(SnippetPageContainer);