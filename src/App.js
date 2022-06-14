import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/catalog">
          <Catalog />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/thank-you">
          <ThankYou />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
