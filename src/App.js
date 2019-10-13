import React from "react";
import LandingPage from "./Containers/LandingPage/LandingPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
    </Switch>
  );
}

export default App;
