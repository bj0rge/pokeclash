import { Request, Response } from 'express';
import { PokemonDao } from '../../dao/_index';

export async function list(req: Request, res: Response) {
  try {
    const pokemons = await PokemonDao.findAll();
    return res.status(200).json(pokemons);
  } catch (error) {
    return res.boom.badRequest(error);
  }
}

