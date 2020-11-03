import React from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import Search from './Search';
import { Container } from 'semantic-ui-react';

class PokemonPage extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.props.addPokemon} />
        <br />
        <Search handleChange={this.props.handleChange} />
        <br />
        <PokemonCollection pokemon={this.props.pokemon} />
      </Container>
    );
  }
}

export default PokemonPage;
