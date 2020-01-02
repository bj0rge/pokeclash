'use strict';

const uuid = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const WEAKNESSES = [
      {
        "defensiveType": "Acier",
        "weaknesses": [
          {
            "type": "Acier",
            "value": 0.5
          },
          {
            "type": "Combat",
            "value": 2
          },
          {
            "type": "Dragon",
            "value": 0.5
          },
          {
            "type": "Fée",
            "value": 0.5
          },
          {
            "type": "Feu",
            "value": 2
          },
          {
            "type": "Glace",
            "value": 0.5
          },
          {
            "type": "Insecte",
            "value": 0.5
          },
          {
            "type": "Normal",
            "value": 0.5
          },
          {
            "type": "Plante",
            "value": 0.5
          },
          {
            "type": "Poison",
            "value": 0
          },
          {
            "type": "Psy",
            "value": 0.5
          },
          {
            "type": "Roche",
            "value": 0.5
          },
          {
            "type": "Sol",
            "value": 2
          },
          {
            "type": "Vol",
            "value": 0.5
          }
        ]
      },
      {
        "defensiveType": "Combat",
        "weaknesses": [
          {
            "type": "Fée",
            "value": 2
          },
          {
            "type": "Insecte",
            "value": 0.5
          },
          {
            "type": "Psy",
            "value": 2
          },
          {
            "type": "Roche",
            "value": 0.5
          },
          {
            "type": "Ténèbres",
            "value": 0.5
          },
          {
            "type": "Vol",
            "value": 2
          }
        ]
      },
      {
        "defensiveType": "Dragon",
        "weaknesses": [
          {
            "type": "Dragon",
            "value": 2
          },
          {
            "type": "Eau",
            "value": 0.5
          },
          {
            "type": "Électrik",
            "value": 0.5
          },
          {
            "type": "Fée",
            "value": 2
          },
          {
            "type": "Feu",
            "value": 0.5
          },
          {
            "type": "Glace",
            "value": 2
          },
          {
            "type": "Plante",
            "value": 0.5
          }
        ]
      },
      {
        "defensiveType": "Eau",
        "weaknesses": [
          {
            "type": "Acier",
            "value": 0.5
          },
          {
            "type": "Eau",
            "value": 0.5
          },
          {
            "type": "Électrik",
            "value": 2
          },
          {
            "type": "Feu",
            "value": 0.5
          },
          {
            "type": "Glace",
            "value": 0.5
          },
          {
            "type": "Plante",
            "value": 2
          }
        ]
      },
      {
        "defensiveType": "Électrik",
        "weaknesses": [
          {
            "type": "Acier",
            "value": 0.5
          },
          {
            "type": "Électrik",
            "value": 0.5
          },
          {
            "type": "Sol",
            "value": 2
          },
          {
            "type": "Vol",
            "value": 0.5
          }
        ]
      },
      {
        "defensiveType": "Fée",
        "weaknesses": [
          {
            "type": "Acier",
            "value": 2
          },
          {
            "type": "Combat",
            "value": 0.5
          },
          {
            "type": "Dragon",
            "value": 0
          },
          {
            "type": "Insecte",
            "value": 0.5
          },
          {
            "type": "Poison",
            "value": 2
          },
          {
            "type": "Ténèbres",
            "value": 0.5
          }
        ]
      },
      {
        "defensiveType": "Feu",
        "weaknesses": [
          {
            "type": "Acier",
            "value": 0.5
          },
          {
            "type": "Eau",
            "value": 2
          },
          {
            "type": "Fée",
            "value": 0.5
          },
          {
            "type": "Feu",
            "value": 0.5
          },
          {
            "type": "Glace",
            "value": 0.5
          },
          {
            "type": "Insecte",
            "value": 0.5
          },
          {
            "type": "Plante",
            "value": 0.5
          },
          {
            "type": "Roche",
            "value": 2
          },
          {
            "type": "Sol",
            "value": 2
          }
        ]
      },
      {
        "defensiveType": "Glace",
        "weaknesses": [
          {
            "type": "Acier",
            "value": 2
          },
          {
            "type": "Combat",
            "value": 2
          },
          {
            "type": "Feu",
            "value": 2
          },
          {
            "type": "Glace",
            "value": 0.5
          },
          {
            "type": "Roche",
            "value": 2
          }
        ]
      },
      {
        "defensiveType": "Insecte",
        "weaknesses": [
          {
            "type": "Combat",
            "value": 0.5
          },
          {
            "type": "Feu",
            "value": 2
          },
          {
            "type": "Plante",
            "value": 0.5
          },
          {
            "type": "Roche",
            "value": 2
          },
          {
            "type": "Sol",
            "value": 0.5
          },
          {
            "type": "Vol",
            "value": 2
          }
        ]
      },
      {
        "defensiveType": "Normal",
        "weaknesses": [
          {
            "type": "Combat",
            "value": 2
          },
          {
            "type": "Spectre",
            "value": 0
          }
        ]
      },
      {
        "defensiveType": "Plante",
        "weaknesses": [
          {
            "type": "Eau",
            "value": 0.5
          },
          {
            "type": "Électrik",
            "value": 0.5
          },
          {
            "type": "Feu",
            "value": 2
          },
          {
            "type": "Glace",
            "value": 2
          },
          {
            "type": "Insecte",
            "value": 2
          },
          {
            "type": "Plante",
            "value": 0.5
          },
          {
            "type": "Poison",
            "value": 2
          },
          {
            "type": "Sol",
            "value": 0.5
          },
          {
            "type": "Vol",
            "value": 2
          }
        ]
      },
      {
        "defensiveType": "Poison",
        "weaknesses": [
          {
            "type": "Combat",
            "value": 0.5
          },
          {
            "type": "Fée",
            "value": 0.5
          },
          {
            "type": "Insecte",
            "value": 0.5
          },
          {
            "type": "Plante",
            "value": 0.5
          },
          {
            "type": "Poison",
            "value": 0.5
          },
          {
            "type": "Psy",
            "value": 2
          },
          {
            "type": "Sol",
            "value": 2
          }
        ]
      },
      {
        "defensiveType": "Psy",
        "weaknesses": [
          {
            "type": "Combat",
            "value": 0.5
          },
          {
            "type": "Insecte",
            "value": 2
          },
          {
            "type": "Psy",
            "value": 0.5
          },
          {
            "type": "Spectre",
            "value": 2
          },
          {
            "type": "Ténèbres",
            "value": 2
          }
        ]
      },
      {
        "defensiveType": "Roche",
        "weaknesses": [
          {
            "type": "Acier",
            "value": 2
          },
          {
            "type": "Combat",
            "value": 2
          },
          {
            "type": "Eau",
            "value": 2
          },
          {
            "type": "Feu",
            "value": 0.5
          },
          {
            "type": "Normal",
            "value": 0.5
          },
          {
            "type": "Plante",
            "value": 2
          },
          {
            "type": "Poison",
            "value": 0.5
          },
          {
            "type": "Sol",
            "value": 2
          },
          {
            "type": "Vol",
            "value": 0.5
          }
        ]
      },
      {
        "defensiveType": "Sol",
        "weaknesses": [
          {
            "type": "Eau",
            "value": 2
          },
          {
            "type": "Électrik",
            "value": 0
          },
          {
            "type": "Glace",
            "value": 2
          },
          {
            "type": "Plante",
            "value": 2
          },
          {
            "type": "Poison",
            "value": 0.5
          },
          {
            "type": "Roche",
            "value": 0.5
          }
        ]
      },
      {
        "defensiveType": "Spectre",
        "weaknesses": [
          {
            "type": "Combat",
            "value": 0
          },
          {
            "type": "Insecte",
            "value": 0.5
          },
          {
            "type": "Normal",
            "value": 0
          },
          {
            "type": "Poison",
            "value": 0.5
          },
          {
            "type": "Spectre",
            "value": 2
          },
          {
            "type": "Ténèbres",
            "value": 2
          }
        ]
      },
      {
        "defensiveType": "Ténèbres",
        "weaknesses": [
          {
            "type": "Combat",
            "value": 2
          },
          {
            "type": "Fée",
            "value": 2
          },
          {
            "type": "Insecte",
            "value": 2
          },
          {
            "type": "Psy",
            "value": 0
          },
          {
            "type": "Spectre",
            "value": 0.5
          },
          {
            "type": "Ténèbres",
            "value": 0.5
          }
        ]
      },
      {
        "defensiveType": "Vol",
        "weaknesses": [
          {
            "type": "Combat",
            "value": 0.5
          },
          {
            "type": "Électrik",
            "value": 2
          },
          {
            "type": "Glace",
            "value": 2
          },
          {
            "type": "Insecte",
            "value": 0.5
          },
          {
            "type": "Plante",
            "value": 0.5
          },
          {
            "type": "Roche",
            "value": 2
          },
          {
            "type": "Sol",
            "value": 0
          }
        ]
      }
    ];


    const { sequelize } = queryInterface;
    await sequelize.transaction(async (transaction) => {
      const query = `
        SELECT *
        FROM "Types";
      `;
      const types = await sequelize.query(
        query,
        {
          type: sequelize.QueryTypes.SELECT,
          transaction,
        },
      );

      await queryInterface.createTable('Weaknesses', {
        defensiveTypeId: {
          allowNull: false,
          type: Sequelize.UUID,
          primaryKey: true,
        },
        offensiveTypeId: {
          allowNull: false,
          type: Sequelize.UUID,
          primaryKey: true,
        },
        coefficient: {
          allowNull: false,
          type: Sequelize.FLOAT,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }, { transaction });

      const typesMapping = new Map(types.map(type => [type.name, type.id]));

      const valuesToInsert = WEAKNESSES.reduce((accumulator, typeWithWeakness) => {
        const { defensiveType: defensiveTypeName, weaknesses } = typeWithWeakness;
        const defensiveTypeId = typesMapping.get(defensiveTypeName);
        return [
          ...accumulator,
          ...weaknesses.map((weakness) => {
            const { type: offensiveTypeName, value: coefficient } = weakness;
            const offensiveTypeId = typesMapping.get(offensiveTypeName);
            return { defensiveTypeId, offensiveTypeId, coefficient };
          }),
        ];
      }, []);

      await queryInterface.bulkInsert(
        'Weaknesses',
        valuesToInsert.map((value) => ({
          ...value,
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
        })),
        { transaction },
      );
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Weaknesses');
  }
};
