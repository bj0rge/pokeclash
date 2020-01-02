'use strict';
const uuid = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const TYPES = [
      'Acier',
      'Combat',
      'Dragon',
      'Eau',
      'Électrik',
      'Fée',
      'Feu',
      'Glace',
      'Insecte',
      'Normal',
      'Plante',
      'Poison',
      'Psy',
      'Roche',
      'Sol',
      'Spectre',
      'Ténèbres',
      'Vol',
    ];

    await queryInterface.sequelize.transaction(async (transaction) => {

      await queryInterface.createTable('Types', {
        id: {
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV1,
          primaryKey: true
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(255)
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }, { transaction });

      await queryInterface.bulkInsert(
        'Types',
        TYPES.map((typeName) => ({
          id: uuid.v1(),
          name: typeName,
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
        })),
        { transaction },
      );
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Types');
  }
};
