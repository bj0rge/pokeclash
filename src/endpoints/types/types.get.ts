import { Request, Response } from 'express';
import { TypeDao } from '../../dao/_index';

export async function list(req: Request, res: Response) {
  try {
    const types = await TypeDao.findAll();
    return res.status(200).json(types);
  } catch (error) {
    return res.boom.badRequest(error);
  }
}

export async function listForTournament(req: Request, res: Response) {
  const { trainerNames } = req.query;
  try {
    const types = await TypeDao.findTypesForTrainers(trainerNames);
    return res.status(200).json(types);
  } catch (error) {
    console.log(error);
    return res.boom.badRequest(error);
  }
}
