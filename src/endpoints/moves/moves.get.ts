import { Request, Response } from 'express';
import { MoveDao } from '../../dao/_index';

export async function list(req: Request, res: Response) {
  try {
    const moves = await MoveDao.findAll();
    return res.status(200).json(moves);
  } catch (error) {
    return res.boom.badRequest(error);
  }
}

