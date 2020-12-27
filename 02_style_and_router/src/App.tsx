import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import TimeConfirm from "./components/pages/TimeConfirm";
import Top from "./components/pages/Top";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Top />
        </Route>
        <Route exact path={"/timeconfirm"}>
          <TimeConfirm />
        </Route>
        {/* 
        こちらでも可
        <Route exact path={"/timeconfirm"} component={TimeConfirm} />
        */}
        <Route>
          <></>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
