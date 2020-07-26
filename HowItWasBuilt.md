## How it was built (2020)

### Start with Sequelize

```bash
npx sequelize init
```

- Created `config`
- Created `migrations`
- Created `models`
- Created `seeders`

Change `config/config.json`

```bash
{
  "development": {
    "dialect": "sqlite",
    "storage": "./store.sqlite"
  },
  "test": {
    "dialect": "sqlite",
    "storage": ":memory"
  },
  "production": {
    "dialect": "sqlite",
    "storage": "./store.sqlite"
  }
}
```

### Create a model Pokemon

```bash
npx sequelize model:generate --name Pokemon --attributes name:string,powerType:string
```

- Created `models/pokemon.js`
- Created `migrations/\*-create-pokemon.js`

### Run migrations

```bash
npx sequelize db:migrate
```

- Created table in `store.sqlite`

To verfify:

```bash
sqlite3 store.sqlite
.schema
```

```bash
.headers ON
.mode column
SELECT * FROM Pokemons;
```

### Create a model Attack

```bash
npx sequelize model:generate --name Attack --attributes name:string,description:string,pokemonID:INTEGER
```

- Created `models/attack.js`
- Created `migrations/\*-create-attack.js`

### Run migrations

```bash
npx sequelize db:migrate
```

- Created table in /store.sqlite

### Assocations

In `migrations/\*-create-attack.js`

```bash
pokemonID: {
  type: Sequelize.INTEGER,
  allowNull: false,
  references: {
    model: 'Pokemons',
    key: 'id',
  },
},
```

In `src/utils`

```bash
pokemons.hasMany(attacks);
```

### Apollo Studio

- Create a new Graph and copy APOLLO_KEY to .env

In `src/index.js`

```bash
const server = new ApolloServer({
  // ...other options...
  engine: {
    reportSchema: true
  }
});
```

```bash
yarn start
```
