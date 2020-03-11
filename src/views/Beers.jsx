import React, { Component, Fragment } from 'react';
import Navbar from './../components/NavBar';
import * as beerService from './../services/beers';

class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    beerService
      .ApiBeers()
      .then(beers => {
        this.setState({
          beers
        });
      })

      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Fragment>
          <Navbar />
        </Fragment>
        <div>
          {/* <pre>{JSON.stringify(this.state.beers, null, 2)}</pre> */}
          {this.state.beers.map(beer => (
            <div key={beer._id}>
              <img src={beer.image_url} alt={beer.name} />
              <strong>{beer.name}</strong>
              <span>{beer.tagline}</span>
              <strong>Created by:</strong>
              <span>{beer.contributed_by}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Beers;
