'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Attack.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    pokemonID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Attack',
  });
  return Attack;
};