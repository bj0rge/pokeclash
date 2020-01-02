import { Model, STRING } from 'sequelize';
import sequelize from './_index';
import { Weakness } from  './weakness';

export class Type extends Model {

}

export class TypeModel {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

Type.init(
  {
    name: STRING(255),
  },
  {
    sequelize,
    modelName: 'type',
    tableName: 'Types',
    name: {
      singular: 'type',
      plural: 'types',
    },
  },
);

Type.belongsToMany(
  Type,
  {
    through: Weakness,
    as: 'typeEfficiencies',
    foreignKey: 'offensiveTypeId',
    otherKey: 'defensiveTypeId',
  },
);

