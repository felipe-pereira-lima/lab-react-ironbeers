import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Link" style={{ textAlignVertical: 'center', textAlign: 'center' }}>
        <Link to="/beers" style={{ color: 'inherit', textDecoration: 'none' }}>
          <img src="./images/beers.png" alt="" />
          <p style={{ textAlign: 'inherit' }}>A list of every beer in our catalogue!</p>
          <hr />
        </Link>
        <Link to="/random-beer" style={{ color: 'inherit', textDecoration: 'none' }}>
          <img src="./images/random-beer.png" alt="" />
          <p>Want to try something new? Let us pick a random beer from our catalogue!</p>
          <hr />
        </Link>
        <Link to="/new-beer" style={{ color: 'inherit', textDecoration: 'none' }}>
          <img src="./images/new-beer.png" alt="" />
          <p>Not interested in any of our beers? Add your own to our marketplace!</p>
        </Link>
      </div>
    );
  }
}

export default Home;
