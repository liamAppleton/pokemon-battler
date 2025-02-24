const {
  Pokeball,
  Pokemon,
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
} = require('../PokemonClasses');

describe('Pokeball', () => {
  let eevee, leafeon, vaporeon;

  beforeEach(() => {
    eevee = new NormalPokemon('Eevee', 55, 18, 'Headbutt');
    flareon = new FirePokemon('Flareon', 65, 20, 'Fire Blast');
    vaporeon = new WaterPokemon('Vaporeon', 70, 19, 'Hydro Pump');

    pokeball = new Pokeball();
  });

  test('Instances of Pokeball should be objects', () => {
    expect(typeof pokeball).toBe('object');
  });

  describe('pokemon property (storage object)', () => {
    test('Instances of Pokeball should have a pokemon property initialised to an empty object', () => {
      expect(pokeball.pokemon).toEqual({});
    });

    test('The pokemon property should store a pokemon object', () => {
      pokeball.pokemon = leafeon;
      expect(pokeball.pokemon).toEqual(leafeon);
    });
  });

  describe('throw', () => {
    test('Instances of Pokeball should have a throw method', () => {
      expect(typeof pokeball.throw).toBe('function');
    });

    test('throw should store the passed pokemon in the pokemon property', () => {
      pokeball.throw(eevee);
      expect(pokeball.pokemon).toEqual(eevee);
    });

    test('Stored pokemon are instances of the Pokemon class', () => {
      pokeball.throw(eevee);
      expect(pokeball.pokemon).toBeInstanceOf(Pokemon);
    });

    test('throw should return "Pokeball is empty" when invoked with no arguments and there is no pokemon currently stored', () => {
      expect(pokeball.throw()).toBe('Pokeball is empty');
    });

    test('throw should release the currently stored pokemon when invoked with no arguments', () => {
      pokeball.throw(eevee);
      expect(pokeball.throw()).toEqual(eevee);
    });

    test('throw should not capture a new pokemon when there is already a storage pokemon', () => {
      pokeball.throw(eevee);
      pokeball.throw(vaporeon);
      expect(pokeball.pokemon).toEqual(eevee);
    });
  });

  describe('isEmpty', () => {
    test('Instances of Pokeball should have an isEmpty method', () => {
      expect(typeof pokeball.isEmpty).toBe('function');
    });

    test('isEmpty should return true is the pokeball is empty', () => {
      expect(pokeball.isEmpty()).toBe(true);
    });

    test('isEmpty should return false is the pokeball is not empty', () => {
      pokeball.throw(eevee);
      expect(pokeball.isEmpty()).toBe(false);
    });
  });

  describe('contains', () => {
    test('Instances of Pokeball should have a contains property', () => {
      expect(typeof pokeball.contains).toBe('function');
    });

    test("contains should return the stored pokemon's name", () => {
      pokeball.throw(eevee);
      expect(pokeball.contains()).toBe('Eevee');
    });

    test("contains should return 'empty...' when there is no pokemon stored", () => {
      expect(pokeball.contains()).toBe('empty...');
    });
  });
});
