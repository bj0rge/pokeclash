import { Express } from 'express';
import { PokemonController } from '../endpoints/_index';

export function routes(app: Express) {

  app.get('/api/pokemons', PokemonController.PokemonGet.list);

}
