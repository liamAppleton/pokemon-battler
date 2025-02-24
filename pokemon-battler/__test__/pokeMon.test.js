const { NormalPokemon } = require('../PokemonClasses');

describe('Pokemon', () => {
  let eevee;
  beforeEach(() => {
    eevee = new NormalPokemon('Eevee', 55, 18, 'Headbutt');
  });
  test('Instances of the Pokemon class should be objects', () => {
    expect(typeof eevee).toBe('object');
  });

  test('Instances of the Pokemon class should have a name property set to a string', () => {
    expect(eevee.name).toBe('Eevee');
  });

  test('Instances of the Pokemon class should have a hitPoints property set to a number', () => {
    expect(eevee.hitPoints).toBe(55);
  });

  test('Instances of the Pokemon class should have an attackDamage property set to a number', () => {
    expect(eevee.attackDamage).toBe(18);
  });

  test('Instances of the Pokemon class should have a move property set to a string', () => {
    expect(eevee.move).toBe('Headbutt');
  });

  describe('takeDamage', () => {
    test('Instances of the Pokemon class should have a takeDamage method', () => {
      expect(typeof eevee.takeDamage).toBe('function');
    });

    test("takeDamage should reduce the Pokemon's hitPoints by the passed argument", () => {
      eevee.takeDamage(5);
      expect(eevee.hitPoints).toBe(50);
    });
  });

  describe('hasFainted', () => {
    test('Instances of the Pokemon class should have a hasFainted method', () => {
      expect(typeof eevee.hasFainted).toBe('function');
    });

    test("hasFainted returns false if pokemon's health is above 0", () => {
      eevee.takeDamage(50);
      console.log(eevee.hitPoints);
      expect(eevee.hasFainted()).toBe(false);
    });

    test("hasFainted returns true if pokemon's health is zero", () => {
      eevee.takeDamage(55);

      expect(eevee.hasFainted()).toBe(true);
    });
  });

  describe('useMove', () => {
    test('Instances of the Pokemon class should have a useMove method', () => {
      expect(typeof eevee.useMove).toBe('function');
    });

    test("useMove returns the pokemon's attackDamage", () => {
      expect(eevee.useMove()).toBe(18);
    });
  });
});
