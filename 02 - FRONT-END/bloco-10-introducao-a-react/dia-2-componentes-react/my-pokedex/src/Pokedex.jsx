import React from 'react';
import pokemons from './Data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return <article className='pokedex'>{pokemons.map((pokemon) => {
      const { id } = pokemon;
      return <Pokemon key={id.toString()} info={pokemon}/>
    })}</article>
  }
}

export default Pokedex;
