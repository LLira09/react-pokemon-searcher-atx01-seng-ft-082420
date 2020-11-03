import React from 'react';
import PokemonPage from './components/PokemonPage';
import './App.css';

class App extends React.Component {
  state = {
    pokemon: [],
    searchTerm: ''
  };
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemon => {
        // console.log(pokemon);
        this.setState({
          pokemon
        });
      });
  }
  handleChange = term => {
    let searchTerm = term.toLowerCase();
    this.setState({
      searchTerm
    });
  };

  addPokemon = newPokemon => {
    console.log('Inside app', newPokemon);
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/josn'
      },
      body: JSON.stringify({
        name: newPokemon.name,
        hp: newPokemon.hp,
        sprites: {
          front: newPokemon.frontUrl,
          back: newPokemon.backUrl
        }
      })
    })
      .then(res => res.json())
      .then(pokeObj => {
        console.log('Res from server', pokeObj);
        this.setState({
          pokemon: [...this.state.pokemon, pokeObj]
        });
      });
  };
  render() {
    let searchedPokemon = this.state.pokemon.filter(p =>
      p.name.toLowerCase().includes(this.state.searchTerm)
    );
    return (
      <div className='App'>
        <PokemonPage
          pokemon={searchedPokemon}
          handleChange={this.handleChange}
          addPokemon={this.addPokemon}
        />
      </div>
    );
  }
}

export default App;
