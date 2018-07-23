import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import CreateAccount from "./pages/CreateAccount";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./index.css";

const App = () =>
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/search/:type" component={Search} />
        <Route path="/createaccount/:type" component={CreateAccount}/>
        <Route component={NoMatch} />
      </Switch>
      <Footer/>
    </div>;

export default App;
