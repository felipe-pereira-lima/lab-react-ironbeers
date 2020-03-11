import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import Beers from './views/Beers';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Home path="/" exact component={Home} />
            <Route path="/beers" exact component={Beers} />
            <Route path="/random-beer" exact component={RandomBeer} />
            <Route path="/new-beer" exact component={NewBeer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
