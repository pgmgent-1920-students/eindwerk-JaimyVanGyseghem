import React, { } from 'react';

import './PokemonsPage.scss';
import { PokemonsList } from '../components/pokemons';

const PokemonsPage = ({children}) => {
  return (
    <div>
        <PokemonsList />
    </div>
  );
};

export default PokemonsPage;