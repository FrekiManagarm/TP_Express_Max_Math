'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GameShots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gameId: {
        type: Sequelize.NUMBER,
        references: {
          model: "Game",
          key: "id"
        }
      },
      playerId: {
        type: Sequelize.NUMBER,
        references: {
          model: "Player",
          key: "id"
        }
      },
      multiplicator: {
        type: Sequelize.NUMBER
      },
      sector: {
        type: Sequelize.NUMBER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('GameShots');
  }
};
