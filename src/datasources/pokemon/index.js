const { DataSource } = require('apollo-datasource');

const createPokemon = require('./createPokemon');
const updatePokemon = require('./updatePokemon');

class PokemonAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async pokemon(id) {
    const pokemon = await this.store.pokemons.findOne({
      where: { id },
      include: [
        {
          model: this.store.attacks,
          as: 'attacks',
        },
      ],
    });

    return pokemon;
  }

  async pokemons() {
    const pokemons = await this.store.pokemons.findAll({
      include: [
        {
          model: this.store.attacks,
          as: 'attacks',
        },
      ],
    });

    return pokemons;
  }

  async createPokemon(args) {
    const pokemon = await createPokemon(this, args);

    return pokemon;
  }

  async updatePokemon(args) {
    const pokemon = await updatePokemon(this, args);

    return pokemon;
  }

  async deletePokemon(id) {
    await this.store.attacks.destroy({ where: { pokemonID: id } });
    const wasDeleted = await this.store.pokemons.destroy({ where: { id } });

    return !!wasDeleted;
  }
}

module.exports = PokemonAPI;
