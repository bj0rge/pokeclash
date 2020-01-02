import { Request, Response } from 'express';
import * as Joi from 'joi';
import { AppUserDao } from '../../dao/_index';

const userSchema = Joi.object().keys({
  pwd: Joi.string().required(),
  email: Joi.string().email().required(),
});

export async function create(req: Request, res: Response) {
  const { error: validationError } = Joi.validate(userSchema);

  if (validationError) {
    return res.boom.badRequest('Validation errors', validationError.message);
  }

  try {
    const appUser = await AppUserDao.create(req.body);
    return res.status(201).json(appUser);
  } catch (error) {
    return res.boom.badRequest(error);
  }
}

export async function login(req: Request, res: Response) {
  const { error: validationError } = Joi.validate(userSchema);

  if (validationError) {
    return res.boom.badRequest('Validation errors', validationError.message);
  }

  try {
    const appUser = await AppUserDao.login(req.body);
    return res.status(200).json(appUser);
  } catch (error) {
    return res.boom.badRequest(error);
  }
}
