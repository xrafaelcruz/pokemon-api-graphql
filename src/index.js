const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const PokemonAPI = require('./datasources/pokemon');
const { createStore } = require('./utils');

const store = createStore();

const server = new ApolloServer({
  typeDefs,
  resolvers,

  dataSources: () => ({
    pokemonAPI: new PokemonAPI({ store }),
  }),

  engine: {
    reportSchema: true
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
