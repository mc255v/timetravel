import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { SignIn } from './components/SignIn';
import Home from './components/Home'
import DrinksByType from './containers/DrinksByType';
import DrinkList from './containers/DrinkList';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/drinks" component={DrinkList} />
        <Route path="/drinks/:type" component={DrinksByType} />
      </div>
    </Router>
  );
}

export default App;
