import React from 'react';

function createMarkup(string) {
  return {__html: string};
}

const SnippetPage = ({ snippet }) => {
  if (!snippet) {
    return (
      <div className="lds-ring">
        <div></div><div></div><div></div><div></div>
      </div>
    );
  };

  return (
    <div className="snippetPage">
      <div className="pageTitle">
        {snippet.title}
      </div>

      <div className="pageQuote">
        {snippet.fullDesc}
      </div>

      <div 
        className="pageContent"
        dangerouslySetInnerHTML={createMarkup(snippet.content)}
      />
    </div>
  );
};

export default SnippetPage;