const createPokemon = async (self, args) => {
  const { name, powerType } = args;

  const pokemon = await self.store.pokemons.create({
    name,
    powerType,
  });

  return pokemon;
};

const createAttacks = async (self, args) => {
  const { attacks, pokemonID } = args;

  if (attacks) {
    for (const attack of attacks) {
      const { name, description } = attack;

      await self.store.attacks.create({
        name,
        description,
        pokemonID,
      });
    }
  }
};

module.exports = async (self, args) => {
  const { name, powerType, attacks } = args;

  const createdPokemon = await createPokemon(self, { name, powerType });
  const pokemonID = createdPokemon.dataValues.id;

  await createAttacks(self, { attacks, pokemonID });

  const pokemon = await self.pokemon(pokemonID);

  return pokemon;
};
