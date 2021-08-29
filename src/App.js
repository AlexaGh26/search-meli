import "./styles/Sass/App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductState from "./context/product.state";
import HomePage from "./ui/pages/home/home";
import DetailsPage from "./ui/pages/details/detail";
import SearcherPage from "./ui/pages/searcher/searcher";

//Esta es la entrada de mi App y aquí tambien configurpé las rutas usando React Router
function App() {
  return (
    <ProductState>
      <Router>
        <Switch>
          <Route exact path="/">
            <SearcherPage></SearcherPage>
          </Route>
          <Route exact path="/items">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/items/:id">
            <DetailsPage></DetailsPage>
          </Route>
        </Switch>
      </Router>
    </ProductState>
  );
}

export default App;
