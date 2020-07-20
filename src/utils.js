const SQL = require('sequelize');

module.exports.createStore = () => {
  const db = new SQL('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './store.sqlite',
    logging: false,
  });

  const pokemons = db.define('pokemon', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: SQL.STRING,
    powerType: SQL.STRING,
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
  });

  const attacks = db.define('attack', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: SQL.STRING,
    description: SQL.STRING,
    pokemonID: SQL.INTEGER,
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
  });

  pokemons.hasMany(attacks);

  return { pokemons, attacks };
};
