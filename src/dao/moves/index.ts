import { Move as MoveModel } from '../../sqlz/models/move';
import { Type as TypeModel } from '../../sqlz/models/type';
import { Move, reshapeMove } from './reshapers';

export async function findAll(): Promise<Move[]> {
  const moves = await MoveModel
    .findAll({
      include: [TypeModel],
    });
  return moves.map(reshapeMove);
}
