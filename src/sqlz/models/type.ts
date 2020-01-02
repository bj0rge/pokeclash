import { Model, STRING } from 'sequelize';
import sequelize from './_index';

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
  { sequelize, modelName: 'Type' },
);

