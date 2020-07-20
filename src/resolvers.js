module.exports = {
  Query: {
    pokemon: async (_, { id }, { dataSources }) => {
      const pokemon = await dataSources.pokemonAPI.pokemon(id);
      return pokemon;
    },

    pokemons: async (_, __, { dataSources }) => {
      const pokemons = await dataSources.pokemonAPI.pokemons();
      return pokemons;
    },
  },

  Mutation: {
    createPokemon: async (_, args, { dataSources }) => {
      const pokemon = await dataSources.pokemonAPI.createPokemon(args);
      return pokemon;
    },

    updatePokemon: async (_, args, { dataSources }) => {
      const pokemon = await dataSources.pokemonAPI.updatePokemon(args);
      return pokemon;
    },

    deletePokemon: async (_, { id }, { dataSources }) => {
      const wasDeleted = await dataSources.pokemonAPI.deletePokemon(id);
      return wasDeleted;
    },
  },
};
