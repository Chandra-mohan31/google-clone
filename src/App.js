import React from 'react';
import Home from "./Home";
import {BrowserRouter as Router ,Switch,Route } from "react-router-dom";
import './App.css';
//import Search from './pages/Search';
import SearchPage from "./SearchPage";
import SearchPageTest from './SearchPageTest';
import Search from './Search';

function App() {
  return (
    <div className="app">
     
      <Router>
        <Switch>
          <Route path="/search">
           <Search />
           <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    
    
   
     
    </div>
  );
}

export default App;
