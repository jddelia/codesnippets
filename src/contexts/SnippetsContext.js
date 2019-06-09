import React, { useContext } from 'react';

const SnippetsContext = React.createContext();

function useSnippetsContext() {
  const snippetsContext = useContext(SnippetsContext);
  return snippetsContext;
};

export {SnippetsContext, useSnippetsContext};