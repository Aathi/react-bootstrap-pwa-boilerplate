import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

const App = () => (
  <Router>
    <Switch>
      <DefaultLayout exact path="/" component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
);

export default App;
