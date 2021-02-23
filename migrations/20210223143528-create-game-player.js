'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GamePlayers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playerId: {
        type: Sequelize.NUMBER,
        references: {
          model: 'Player',
          key: 'id'
        }
      },
      gameId: {
        type: Sequelize.NUMBER,
        references: {
          model: 'Game',
          key: 'id'
        }
      },
      remainingShots: {
        type: Sequelize.NUMBER
      },
      score: {
        type: Sequelize.NUMBER
      },
      rank: {
        type: Sequelize.NUMBER
      },
      order: {
        type: Sequelize.NUMBER
      },
      inGame: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('GamePlayers');
  }
};
