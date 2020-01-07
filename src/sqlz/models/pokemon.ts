import {
  Model,
  UUID,
  UUIDV1,
  INTEGER,
  BOOLEAN,
  STRING,
  DATE,
} from 'sequelize';
import sequelize from './_index';

export class Pokemon extends Model {

}

export class PokemonModel {
  id: string;
  galarNb: number;
  nationalNb: number;
  isGalarForm: boolean;
  imgUrl: string;
  frName: string;
  enName: string;
  createdAt: Date;
  updatedAt: Date;
}

Pokemon.init(
  {
    id: {
      allowNull: false,
      type: UUID,
      defaultValue: UUIDV1,
      primaryKey: true,
    },
    galarNb: {
      allowNull: true,
      type: INTEGER,
    },
    nationalNb: {
      allowNull: false,
      type: INTEGER,
    },
    isGalarForm: {
      allowNull: false,
      defaultValue: false,
      type: BOOLEAN,
    },
    imgUrl: {
      allowNull: true,
      type: STRING(255),
    },
    frName: {
      allowNull: false,
      type: STRING(255),
    },
    enName: {
      allowNull: false,
      type: STRING(255),
    },
    createdAt: {
      allowNull: false,
      type: DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DATE,
    },
  },
  {
    sequelize,
    modelName: 'pokemon',
    tableName: 'Pokemons',
    name: {
      singular: 'pokemon',
      plural: 'pokemons',
    },
  },
);


