'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Player.hasMany(models.GamePlayer, {
        foreignKey: "fk_gameplayer"
      })
    }
  };
  Player.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gameWin: DataTypes.NUMBER,
    gameLost: DataTypes.NUMBER,
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};
