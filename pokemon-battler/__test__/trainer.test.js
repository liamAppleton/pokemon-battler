const {
  Trainer,
  Pokeball,
  FirePokemon,
  NormalPokemon,
  WaterPokemon,
  GrassPokemon,
} = require('../PokemonClasses');

describe('Trainer', () => {
  let trainer, pb1, pb2, pb3, pb4, pb5, pb6;
  let eevee, flareon, vaporeon, leafeon, charmander, squirtle;
  beforeEach(() => {
    eevee = new NormalPokemon('Eevee', 55, 18, 'Headbutt');
    flareon = new FirePokemon('Flareon', 65, 20, 'Fire Blast');
    vaporeon = new WaterPokemon('Vaporeon', 70, 19, 'Hydro Pump');
    leafeon = new GrassPokemon('Leafeon', 65, 17, 'Giga Drain');
    charmander = new FirePokemon('Charmander', 44, 17, 'Flamethrower');
    squirtle = new WaterPokemon('Squirtle', 44, 16, 'Surf');

    pb1 = new Pokeball();
    pb2 = new Pokeball();
    pb3 = new Pokeball();
    pb4 = new Pokeball();
    pb5 = new Pokeball();
    pb6 = new Pokeball();

    trainer = new Trainer('Ash', pb1, pb2, pb3, pb4, pb5, pb6);
  });

  test('Instances of Trainer should be objects', () => {
    expect(typeof trainer).toBe('object');
  });

  test('Instances of Trainer should have a name property', () => {
    expect(trainer.name).toBe('Ash');
  });

  describe('belt', () => {
    test('Instances of Trainer should have a belt property which should be an array', () => {
      expect(typeof trainer.belt).toBe('object');
    });

    test('the belt property stores instances of the Pokeball class', () => {
      expect(trainer.belt[0]).toBeInstanceOf(Pokeball);
    });
  });

  describe('catch', () => {
    test('Instances of Trainer should have a catch method', () => {
      expect(typeof trainer.catch).toBe('function');
    });

    test('catch will return "All pokeballs full" if there is no space', () => {
      pb1.throw(eevee);
      pb2.throw(flareon);
      pb3.throw(vaporeon);
      pb4.throw(leafeon);
      pb5.throw(charmander);
      pb6.throw(squirtle);

      expect(trainer.catch()).toBe('All pokeballs full');
    });

    test('catch will store a new pokemon in the first available empty pokeball', () => {
      pb1.throw(eevee);
      pb3.throw(vaporeon);
      pb4.throw(leafeon);
      pb6.throw(squirtle);

      trainer.catch(flareon);
      trainer.catch(charmander);

      expect(trainer.belt[1].contains()).toBe('Flareon');
      expect(trainer.belt[4].contains()).toBe('Charmander');
    });
  });

  describe('getPokemon', () => {
    test('Instances of trainer should have a getPokemon method', () => {
      expect(typeof trainer.getPokemon).toBe('function');
    });

    test('getPokemon will release the passed pokemon if it is in the belt', () => {
      pb2.throw(flareon);
      expect(trainer.getPokemon('Flareon')).toEqual(flareon);
    });

    test('getPokemon will release the passed pokemon if it is in the belt and there are multiple pokemon in the belt', () => {
      pb1.throw(eevee);
      pb2.throw(flareon);
      pb3.throw(leafeon);
      expect(trainer.getPokemon('Flareon')).toEqual(flareon);
    });

    test("getPokemon will return 'Pokemon not found' if it is not in the belt", () => {
      pb1.throw(eevee);
      expect(trainer.getPokemon('Flareon')).toBe('Pokemon not found');
    });
  });
});
