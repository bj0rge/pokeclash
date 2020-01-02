import { Type } from './../sqlz/models/type';

export function findAll(): Promise<any> {
  return Type
    .findAll({
      include: [{
        model: Type,
        as: 'typeEfficiencies',
      }],
    });
}
