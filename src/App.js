import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import About from './components/About/About';
import SnippetPageContainer from './components/SnippetPage/SnippetPageContainer';
import Footer from './components/Footer';

import { SnippetsContext } from './contexts/SnippetsContext';

function App() {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    function fetchData(url) {
      axios.get(url)
        .then(response => {
          setSnippets(response.data);
        })
        .catch(err => {
          throw err;
        });
    }

    fetchData('https://codesnippetapi.herokuapp.com/snippets/all');
  }, [setSnippets]);

  return (
    <BrowserRouter>
      <SnippetsContext.Provider value={snippets}>
        <Navbar />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/snippets/:id" component={SnippetPageContainer} />
        </Switch>
        <Footer />
      </SnippetsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
