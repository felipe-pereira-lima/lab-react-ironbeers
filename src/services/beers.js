import axios from 'axios';

const ApiBeers = () =>
  new Promise((resolve, reject) => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then(result => {
        const beerList = result.data;
        console.log(beerList);
      })
      .catch(error => {
        reject(error);
      });
  });

export { ApiBeers };
