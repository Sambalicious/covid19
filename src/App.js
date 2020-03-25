import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Test } from './components/Test';





function App() {
  return(
   
    <div className="container mx-auto ">
      <Router>
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/test" exact component={Test}/>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
