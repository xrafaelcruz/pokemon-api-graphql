const { gql } = require('apollo-server');

const attackFields = `
  name: String!
  description: String
`;

const typeDefs = gql`
  enum PowerType {
    NORMAL
    FIRE
    WATER
    ROCK
    ELECTRIC
    PSYCHIC
    ICE
    GHOST
    BUG
    POISON
    FLYING
    FIGHTING
  }

  type Attack {
    id: ID!
    pokemonID: ID!
    ${attackFields}
  }

  input InputAttack {
    ${attackFields}
  }

  type Pokemon {
    id: ID!
    name: String!
    powerType: PowerType
    description: String
    attacks: [Attack]
    image: String
  }

  type Query {
    pokemon(id: ID!): Pokemon
    pokemons: [Pokemon]
  }

  type Mutation {
    createPokemon(
      name: String!
      powerType: PowerType
      attacks: [InputAttack]
    ): Pokemon!

    updatePokemon(
      id: ID!
      name: String!
      powerType: PowerType
      attacks: [InputAttack]
    ): Pokemon!

    deletePokemon(id: ID!): Boolean!
  }
`;

module.exports = typeDefs;
