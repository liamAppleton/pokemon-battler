const {
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
} = require('../PokemonClasses');

describe('FirePokemon, WaterPokemon, GrassPokemon, NormalPokemon', () => {
  let flareon, vaporeon, leafeon, eevee;

  beforeEach(() => {
    eevee = new NormalPokemon('Eevee', 55, 18, 'Headbutt');
    flareon = new FirePokemon('Flareon', 65, 20, 'Fire Blast');
    vaporeon = new WaterPokemon('Vaporeon', 70, 19, 'Hydro Pump');
    leafeon = new GrassPokemon('Leafeon', 65, 17, 'Giga Drain');
  });

  describe('FirePokemon', () => {
    test('Instances of FirePokemon should be objects', () => {
      expect(typeof flareon).toBe('object');
    });

    test('Instances of FirePokemon should have a type property set to fire', () => {
      expect(flareon.type).toBe('fire');
    });

    test('Instances of FirePokemon should have a method isEffectiveAgainst which returns true when passed a GrassPokemon', () => {
      expect(flareon.isEffectiveAgainst(leafeon)).toBe(true);
    });

    test('Instances of FirePokemon should have a method isWeakTo which returns true when passed a WaterPokemon', () => {
      expect(flareon.isWeakTo(vaporeon)).toBe(true);
    });
  });

  describe('WaterPokemon', () => {
    test('Instances of WaterPokemon should be objects', () => {
      expect(typeof vaporeon).toBe('object');
    });

    test('Instances of WaterPokemon should have a type property set to water', () => {
      expect(vaporeon.type).toBe('water');
    });

    test('Instances of WaterPokemon should have a method isEffectiveAgainst which returns true when passed a FirePokemon', () => {
      expect(vaporeon.isEffectiveAgainst(flareon)).toBe(true);
    });

    test('Instances of WaterPokemon should have a method isWeakTo which returns true when passed a GrassPokemon', () => {
      expect(vaporeon.isWeakTo(leafeon)).toBe(true);
    });
  });

  describe('GrassPokemon', () => {
    test('Instances of GrassPokemon should be objects', () => {
      expect(typeof leafeon).toBe('object');
    });

    test('Instances of GrassPokemon should have a type property set to grass', () => {
      expect(leafeon.type).toBe('grass');
    });

    test('Instances of GrassPokemon should have a method isEffectiveAgainst which returns true when passed a WaterPokemon', () => {
      expect(leafeon.isEffectiveAgainst(vaporeon)).toBe(true);
    });

    test('Instances of GrassPokemon should have a method isWeakTo which returns true when passed a FirePokemon', () => {
      expect(leafeon.isWeakTo(flareon)).toBe(true);
    });
  });

  describe('NormalType', () => {
    test('Instances of NormalPokemon should be objects', () => {
      expect(typeof eevee).toBe('object');
    });

    test('Instances of NormalPokemon should have a type property set to noraml', () => {
      expect(eevee.type).toBe('normal');
    });

    test('isEffectiveAgainst should return false when passed a NormalPokmon', () => {
      expect(leafeon.isEffectiveAgainst(eevee)).toBe(false);
      expect(vaporeon.isEffectiveAgainst(eevee)).toBe(false);
      expect(flareon.isEffectiveAgainst(eevee)).toBe(false);
      expect(eevee.isEffectiveAgainst(flareon)).toBe(false);
    });

    test('Instances of NormalPokemon should have a method isEffectiveAgainst which returns false when passed any type', () => {
      expect(eevee.isEffectiveAgainst(flareon)).toBe(false);
      expect(eevee.isEffectiveAgainst(vaporeon)).toBe(false);
      expect(eevee.isEffectiveAgainst(leafeon)).toBe(false);
    });

    test('isWeakTo should return false when passed a NormalPokmon', () => {
      expect(leafeon.isWeakTo(eevee)).toBe(false);
      expect(vaporeon.isWeakTo(eevee)).toBe(false);
      expect(flareon.isWeakTo(eevee)).toBe(false);
    });

    test('Instances of NormalPokemon should have a method isWeakTo which returns false when passed any type', () => {
      expect(eevee.isWeakTo(flareon)).toBe(false);
      expect(eevee.isWeakTo(vaporeon)).toBe(false);
      expect(eevee.isWeakTo(leafeon)).toBe(false);
    });
  });
});
