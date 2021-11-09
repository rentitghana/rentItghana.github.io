import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import Footer from './components/Footer';
import { initializeApp } from '@firebase/app';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './screens/Home';
import SearchPage from './screens/SearchPage';
import Details from './screens/Details';
import {app} from './firebase';

function App() {
  
  return (
    <div className="App">
      <Router>
      <Header/>

      <Switch>

      <Route path="/details">
           <Details />
        </Route>

        <Route path="/search">
           <SearchPage />
        </Route>

        

        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      <Footer />

      </Router>
    </div>
  );
}

export default App;
