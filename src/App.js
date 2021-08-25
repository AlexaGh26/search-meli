import "./styles/Sass/App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import ProductState from "./context/product.state";

function App() {
  return (
    <ProductState>
      <Router>
        <Switch>
          <Route path="/">
            <HomePage ></HomePage>
          </Route>
        </Switch>
      </Router>
    </ProductState>
  );
}

export default App;
