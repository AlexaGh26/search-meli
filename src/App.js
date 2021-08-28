import "./styles/Sass/App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductState from "./context/product.state";
import HomePage from "./ui/pages/home/home";
import DetailsPage from "./ui/pages/details/detail";
import SearcherPage from "./ui/pages/searcher/searcher";

function App() {
  return (
    <ProductState>
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/details">
            <DetailsPage></DetailsPage>
          </Route>
          <Route path="/">
            <SearcherPage></SearcherPage>
          </Route>
        </Switch>
      </Router>
    </ProductState>
  );
}

export default App;
