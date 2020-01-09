import { Model, STRING, UUID, ENUM, INTEGER } from 'sequelize';
import sequelize from './_index';
import { Type } from  './type';

export class Move extends Model {

}

export class MoveModel {
  id: string;
  name: string;
  typeId: string;
  category: string;
  power: number;
  accuracyPercentage: number;
  powerPoints: number;
  createdAt: Date;
  updatedAt: Date;
}

Move.init(
  {
    name: {
      type: STRING(255),
      allowNull: false,
    },
    typeId: {
      type: UUID,
      allowNull: false,
    },
    category: ENUM('physical', 'special', 'status'),
    power: INTEGER,
    accuracyPercentage: INTEGER,
    powerPoints: INTEGER,
  },
  {
    sequelize,
    modelName: 'move',
    tableName: 'Moves',
    name: {
      singular: 'move',
      plural: 'types',
    },
  },
);

Move.belongsTo(
  Type,
);
