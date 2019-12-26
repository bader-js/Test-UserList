import React from 'react';
import './App.css';
import UserCard from './components/usercard';
import Posts from './components/posts';
import Details from './components/posts';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
    <div className="App">
    <Switch>
          <Route exact path="/" render ={() => <UserCard /> } />
  <Route exact path="/posts/:id" render ={props => <Posts {...props} />} />
  <Route exact path="/details/:id" render ={props => <Details {...props} />} />
          </Switch>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
