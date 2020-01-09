import { Type, reshapeType } from '../types/reshapers';

export interface Move {
  id: string;
  name: string;
  typeId: string;
  category: string;
  power: number;
  accuracyPercentage: number;
  powerPoints: number;
  type?: Type;
}

export function reshapeMove (
  move: any,
): Move {
  if (!move) {
    return null;
  }

  const hasType =
    move.typeId &&
    move.type;
  const type = hasType
    ? reshapeType(move.type)
    : undefined;

  return {
    id: move.id,
    name: move.name,
    typeId: move.typeId,
    category: move.category,
    power: move.power,
    accuracyPercentage: move.accuracyPercentage,
    powerPoints: move.powerPoints,
    type,
  };
}