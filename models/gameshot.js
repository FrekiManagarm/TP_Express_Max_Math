'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameShot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  GameShot.init({
    gameId: DataTypes.NUMBER,
    playerId: DataTypes.NUMBER,
    multiplicator: DataTypes.NUMBER,
    sector: DataTypes.NUMBER,
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'GameShot',
  });
  return GameShot;
};