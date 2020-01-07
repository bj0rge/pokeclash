import { Pokemon as PokemonModel } from '../../sqlz/models/pokemon';
import { Pokemon, reshapePokemon } from './reshapers';

export async function findAll(): Promise<Pokemon[]> {
  // FIXME: paginate
  const pokemons = await PokemonModel
    .findAll();
  return pokemons.map(reshapePokemon);
}
