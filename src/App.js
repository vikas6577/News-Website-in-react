import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  exact 
} from "react-router-dom";


export default class App extends Component {
  pageSize=9;
  apikey=process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News key="general" pagesize={this.pageSize} apikey={this.apikey} country="in" category="general" />
            </Route>
            <Route exact path="/business">
              <News key="business" pagesize={this.pageSize} apikey={this.apikey} country="in" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pagesize={this.pageSize} apikey={this.apikey} country="in" category="entertainment" />
            </Route>
            <Route exact path="/general">
              <News key="general" pagesize={this.pageSize} apikey={this.apikey} country="in" category="general" />
            </Route>
            <Route exact path="/health">
              <News key="health" pagesize={this.pageSize} apikey={this.apikey} country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News key="science" pagesize={this.pageSize} apikey={this.apikey} country="in" category="science" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pagesize={this.pageSize} apikey={this.apikey} country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" pagesize={this.pageSize} apikey={this.apikey} country="in" category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

}
