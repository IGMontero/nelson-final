import React from "react";
import {Route, Switch} from "react-router-dom";
import Books from "./pages/Books";
import Search from "./pages/Search";
import CreateAccount from "./pages/CreateAccount";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import "./index.css";

const App = () =>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route path="/search/:type" component={Search} />
        <Route path="/createaccount/:type" component={CreateAccount}/>
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>;

export default App;
