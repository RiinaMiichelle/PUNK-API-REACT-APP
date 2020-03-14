import React, { Component } from 'react';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      beers: []
    }
  }

  componentDidMount= () => {
    fetch('https://api.punkapi.com/v2/beers')
          .then((resp) => {
            return resp.json();
          })
          .then((beers) => {
            this.setState({
              beers: beers 
            });
          });
  }

  // displayBeerInfo = () => {
  //   var beerList = this.state.beers
  //   console.log(beerList);
  // }


  render () {
    // console.log('state: ' + JSON.stringify(this.state));
    return (
      <div>
        
      </div>
    );
  }
  
}



export default App;
