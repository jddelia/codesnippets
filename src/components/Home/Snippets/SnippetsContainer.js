import React from 'react';

import SnippetCard from './SnippetCard';

import { useSnippetsContext } from '../../../contexts/SnippetsContext';

const SnippetsContainer = () => {
  const snippetsList = useSnippetsContext().map(snippet => {
    return (
      <SnippetCard
        key={snippet._id}
        title={snippet.title}
        shortDesc={snippet.shortDesc}
      />
    )
  });

  return (
    <div className="snippetsContainer">
      {snippetsList}
    </div>
  );
};

export default SnippetsContainer;