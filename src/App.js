import './styles/Sass/App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/home/home';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" >
        <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
