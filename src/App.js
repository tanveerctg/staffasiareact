import React from "react";
import LandingPage from "./Containers/LandingPage/LandingPage";
import Hiring from './Containers/Hiring/Hiring';
import { Switch, Route } from "react-router-dom";
import ScrollOut from "scroll-out";
function App() {
  ScrollOut();
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/hiring" component={Hiring} />
    </Switch>
  );
}

export default App;
