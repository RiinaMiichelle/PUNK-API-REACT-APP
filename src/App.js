import React from 'react';

class Beer extends React.Component {
  constructor (props) {
    super(props); 
    this.state = {
      isLiked: false,
    }
  }

  handleBeerLike = () => {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render() {
    const { isLiked } = this.state;
    const { beer } = this.props;
    let likeButtonText = "Like Beer";
    if (isLiked) {
      likeButtonText = "Unlike Beer";
    }

    return (
      <div className="beer" >
        <button onClick={this.handleBeerLike}>{likeButtonText}</button>
        {
          Object.keys(beer).map((beerProperty, idx) => {
            if (beerProperty === 'id') {
              return null;
            }

            return (
              <div key={idx} className={beerProperty}>
                {`${beerProperty}: ${JSON.stringify(beer[beerProperty])}`}
              </div>
            );
          })
        }
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
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

  createBeerComponents = () => {
    return this.state.beers.map((beer, idx) =>
        <li key={idx}>
          <Beer beer={beer}/>
          <br></br>
        </li>
    );
  }

  render () {
    return (
      <ul>
        {this.createBeerComponents()}
      </ul>
    );
  }
  
}

export default App;
