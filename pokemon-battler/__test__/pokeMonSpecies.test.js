const {
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
  NormalPokemon,
} = require('../PokemonClasses');

describe.skip('pokemonSpecies', () => {
  let charmander, squirtle, bulbasaur, rattata;
  beforeEach(() => {
    charmander = new Charmander('Charmander', 65, 20);
    squirtle = new Squirtle('Squirtle', 65, 20);
    bulbasaur = new Bulbasaur('Bulbasaur', 65, 20);
    rattata = new Rattata('Rattata', 65, 20);
  });

  describe('Chamander', () => {
    test('Instances of Charmander should be objects', () => {
      expect(typeof charmander).toBe('object');
    });

    test('Instances of Charmander should extend FirePokemon', () => {
      expect(charmander).toBeInstanceOf(FirePokemon);
    });

    test('Instances of Charmander should have a move property set to ember', () => {
      expect(charmander.move).toBe('ember');
    });
  });

  describe('Squirtle', () => {
    test('Instances of Squirtle should be objects', () => {
      expect(typeof squirtle).toBe('object');
    });

    test('Instances of Squirtle should extend WaterPokemon', () => {
      expect(squirtle).toBeInstanceOf(WaterPokemon);
    });

    test('Instances of Squirtle should have a move property set to water gun', () => {
      expect(squirtle.move).toBe('water gun');
    });
  });

  describe('Bulbasaur', () => {
    test('Instances of Bulbasaur should be objects', () => {
      expect(typeof bulbasaur).toBe('object');
    });

    test('Instances of Bulbasaur should extend GrassPokemon', () => {
      expect(bulbasaur).toBeInstanceOf(GrassPokemon);
    });

    test('Instances of Bulbasaur should have a move property set to vine whip', () => {
      expect(bulbasaur.move).toBe('vine whip');
    });
  });

  describe('Rattata', () => {
    test('Instances of Rattata should be objects', () => {
      expect(typeof rattata).toBe('object');
    });

    test('Instances of Rattata should extend NormalPokemon', () => {
      expect(rattata).toBeInstanceOf(NormalPokemon);
    });

    test('Instances of Rattata should have a move property set to tackle', () => {
      expect(rattata.move).toBe('tackle');
    });
  });
});
