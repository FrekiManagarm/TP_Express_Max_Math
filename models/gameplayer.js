'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GamePlayer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  GamePlayer.init({
    playerId: DataTypes.NUMBER,
    gameId: DataTypes.NUMBER,
    remainingShots: DataTypes.NUMBER,
    score: DataTypes.NUMBER,
    rank: DataTypes.NUMBER,
    order: DataTypes.NUMBER,
    inGame: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'GamePlayer',
  });
  return GamePlayer;
};