'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.hasMany(GamePlayer, {
        foreignKey: "fk_gameplayers"
      })
      Game.hasMany(GameShot, {
        foreignKey: "fk_gameshots"
      })
    }
  };
  Game.init({
    mode: DataTypes.STRING,
    name: DataTypes.STRING,
    currentPlayerId: DataTypes.NUMBER,
    status: DataTypes.STRING,
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
