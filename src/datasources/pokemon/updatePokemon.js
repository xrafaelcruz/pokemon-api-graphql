const updatePokemon = async (self, args) => {
  const { name, powerType, id } = args;

  const pokemon = await self.store.pokemons.update(
    {
      name,
      powerType,
    },
    {
      where: {
        id,
      },
    }
  );

  return pokemon;
};

const updateAttacks = async (self, args) => {
  const { attacks, id } = args;

  if (attacks) {
    for (const attack of attacks) {
      const { name, description } = attack;

      await self.store.attacks.update(
        {
          name,
          description,
        },
        {
          where: {
            pokemonID: id,
          },
        }
      );
    }
  }
};

module.exports = async (self, args) => {
  const { name, powerType, attacks, id } = args;

  await updatePokemon(self, { name, powerType, id });
  await updateAttacks(self, { attacks, id });

  const pokemon = await self.pokemon(id);

  return pokemon;
};
