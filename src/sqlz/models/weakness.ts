import { Model, UUID, FLOAT } from 'sequelize';
import sequelize from './_index';

export class Weakness extends Model {

}

export class WeaknessModel {
  defensiveTypeId: string;
  offensiveTypeId: string;
  coefficient: number;
  createdAt: Date;
  updatedAt: Date;
}

Weakness.init(
  {
    defensiveTypeId: {
      type: UUID,
      primaryKey: true,
    },
    offensiveTypeId: {
      type: UUID,
      primaryKey: true,
    },
    coefficient: FLOAT(),
  },
  {
    sequelize,
    modelName: 'weakness',
    tableName: 'Weaknesses',
    name: {
      singular: 'weakness',
      plural: 'weaknesses',
    },
  },
);
