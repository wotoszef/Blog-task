import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import MainPage from "./components/features/main-page/MainPage";
import SpecificPage from "./components/features/specific-page/SpecificPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/posts" component={MainPage} />
          <Route exact path="/:title/:id" component={SpecificPage} />
          <Redirect to="/posts" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
