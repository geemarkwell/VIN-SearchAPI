import React from 'react';
import {BrowserRouter as Router, Route, } from 'react-router-dom';

import { ResultsPage } from '../src/pages/Home/resultsPage';
import { SearchResult } from '../src/components/Search/searchResult';

const Main = () => {
    return (
      <Router>
      <Route exact path='/' component={SearchResult} />
      <Route path='/result' component={ResultsPage} />
      </Router>

    );
  }
  
  export default Main;