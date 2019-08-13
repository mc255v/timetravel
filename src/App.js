import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home'
import DrinksByType from './containers/DrinksByType';
import DrinkList from './containers/DrinkList';
import ProfileMain from './components/profile/ProfileMain';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/drinks" component={DrinkList} />
        <Route path="/drinks/:type" component={DrinksByType} />
        <Route exact path="/profile" component={ProfileMain} />
      </div>
    </Router>
  );
}

export default App;
