import './App.css';

import React, { Component } from 'react'
import NavbarM from './Components/NavbarM';
import News from './Components/News';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div>
      {/* <NavbarM/>
      <BrowserRouter>
            <Switch>
            <Route exact path="/"><News key="general" pagesize="6" country="in" category="general"/></Route> 
          <Route exact path="/Business"><News key="Business" pagesize="6" country="in" category="Business"/></Route> 
          <Route exact path="/General"><News key="Business" pagesize="6" country="in" category="Business"/></Route> 
          <Route exact path="/Health"><News key="Health" pagesize="6" country="in" category="Health"/></Route> 
          <Route exact path="/Science"><News key="Science" pagesize="6" country="in" category="Science"/></Route> 
          <Route exact path="/Sports"><News key="Sports" pagesize="6" country="in" category="Sports"/></Route> 
          <Route exact path="/Technology"><News key="Technology" pagesize="6" country="in" category="Technology"/></Route> 
            </Switch>
      </BrowserRouter> */}

        <BrowserRouter>
        <NavbarM/>
        <Switch>
          <Route exact path="/"><News key="general" pagesize="6" country="in" category="general"/></Route> 
          <Route exact path="/Business"><News key="Business" pagesize="6" country="in" category="Business"/></Route> 
          <Route exact path="/General"><News key="Business" pagesize="6" country="in" category="Business"/></Route> 
          <Route exact path="/Health"><News key="Health" pagesize="6" country="in" category="Health"/></Route> 
          <Route exact path="/Science"><News key="Science" pagesize="6" country="in" category="Science"/></Route> 
          <Route exact path="/Sports"><News key="Sports" pagesize="6" country="in" category="Sports"/></Route> 
          <Route exact path="/Technology"><News key="Technology" pagesize="6" country="in" category="Technology"/></Route> 
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

