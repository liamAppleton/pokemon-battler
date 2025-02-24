const {
  Pokemon,
  Battle,
  Trainer,
  Pokeball,
  FirePokemon,
  NormalPokemon,
  WaterPokemon,
  GrassPokemon,
} = require('../PokemonClasses');

describe('Battle', () => {
  let trainer1, trainer2;
  let pb1_trainer1,
    pb2_trainer1,
    pb3_trainer1,
    pb4_trainer1,
    pb5_trainer1,
    pb6_trainer1;
  let pb1_trainer2,
    pb2_trainer2,
    pb3_trainer2,
    pb4_trainer2,
    pb5_trainer2,
    pb6_trainer2;
  let eevee_1, flareon_1, vaporeon_1, leafeon_1, charmander_1, squirtle_1;
  let eevee_2, flareon_2, vaporeon_2, leafeon_2, charmander_2, squirtle_2;
  let battle;

  beforeEach(() => {
    eevee_1 = new NormalPokemon('Eevee', 55, 18, 'Headbutt');
    flareon_1 = new FirePokemon('Flareon', 65, 20, 'Fire Blast');
    vaporeon_1 = new WaterPokemon('Vaporeon', 70, 19, 'Hydro Pump');
    leafeon_1 = new GrassPokemon('Leafeon', 65, 17, 'Giga Drain');
    charmander_1 = new FirePokemon('Charmander', 44, 17, 'Flamethrower');
    squirtle_1 = new WaterPokemon('Squirtle', 44, 16, 'Surf');

    pb1_trainer1 = new Pokeball();
    pb2_trainer1 = new Pokeball();
    pb3_trainer1 = new Pokeball();
    pb4_trainer1 = new Pokeball();
    pb5_trainer1 = new Pokeball();
    pb6_trainer1 = new Pokeball();

    trainer1 = new Trainer(
      'Ash',
      pb1_trainer1,
      pb2_trainer1,
      pb3_trainer1,
      pb4_trainer1,
      pb5_trainer1,
      pb6_trainer1
    );

    trainer1.catch(eevee_1);
    trainer1.catch(flareon_1);
    trainer1.catch(vaporeon_1);
    trainer1.catch(leafeon_1);
    trainer1.catch(charmander_1);
    trainer1.catch(squirtle_1);

    eevee_2 = new NormalPokemon('Eevee', 55, 18, 'Headbutt');
    flareon_2 = new FirePokemon('Flareon', 65, 20, 'Fire Blast');
    vaporeon_2 = new WaterPokemon('Vaporeon', 70, 19, 'Hydro Pump');
    leafeon_2 = new GrassPokemon('Leafeon', 65, 17, 'Giga Drain');
    charmander_2 = new FirePokemon('Charmander', 44, 17, 'Flamethrower');
    squirtle_2 = new WaterPokemon('Squirtle', 44, 16, 'Surf');

    pb1_trainer2 = new Pokeball();
    pb2_trainer2 = new Pokeball();
    pb3_trainer2 = new Pokeball();
    pb4_trainer2 = new Pokeball();
    pb5_trainer2 = new Pokeball();
    pb6_trainer2 = new Pokeball();

    trainer2 = new Trainer(
      'Allister',
      pb1_trainer2,
      pb2_trainer2,
      pb3_trainer2,
      pb4_trainer2,
      pb5_trainer2,
      pb6_trainer2
    );

    trainer2.catch(flareon_2);
    trainer2.catch(vaporeon_2);
    trainer2.catch(leafeon_2);
    trainer2.catch(charmander_2);
    trainer2.catch(squirtle_2);
    trainer2.catch(eevee_2);

    battle = new Battle(trainer1, trainer2);
  });

  test('Instances of Battle should be an object', () => {
    expect(typeof battle).toBe('object');
  });

  describe('trainer properties', () => {
    test('Instances of Battle should have properties for each trainer', () => {
      expect(battle.trainer1).toEqual(trainer1);
      expect(battle.trainer2).toEqual(trainer2);
    });

    test('trainer properties should container an instance of Traner', () => {
      expect(battle.trainer1).toBeInstanceOf(Trainer);
      expect(battle.trainer2).toBeInstanceOf(Trainer);
    });
  });

  describe('calculateDamageMultiplier', () => {
    test('Instances of Battle should have a calculateDamageMultiplier method', () => {
      expect(typeof battle.calculateDamageMultiplier).toBe('function');
    });

    test('calculateDamageMultiplier should return 1 when attacker and or defender is normal type', () => {
      const pokemon1 = battle.trainer1.belt[0].throw();
      const pokemon2 = battle.trainer2.belt[1].throw();
      expect(battle.calculateDamageMultiplier(pokemon1, pokemon2)).toBe(1);
    });

    test('calculateDamageMultiplier should return 0.75 when defender is strong against attacker', () => {
      const pokemon1 = battle.trainer1.belt[2].throw();
      const pokemon2 = battle.trainer2.belt[2].throw();
      expect(battle.calculateDamageMultiplier(pokemon1, pokemon2)).toBe(0.75);
    });

    test('calculateDamageMultiplier should return 1.25 when defender is weak against attacker', () => {
      const pokemon1 = battle.trainer1.belt[1].throw();
      const pokemon2 = battle.trainer2.belt[2].throw();
      expect(battle.calculateDamageMultiplier(pokemon1, pokemon2)).toBe(1.25);
    });
  });

  describe('fight', () => {
    test('Instances of Battle has a fight method', () => {
      expect(typeof battle.fight).toBe('function');
    });

    test("fight will deduct damage equivalent to attacking pokemon's attackDamage when attacker is normal", () => {
      const pokemon1 = battle.trainer1.belt[0].throw();
      const pokemon2 = battle.trainer2.belt[1].throw();
      battle.fight(pokemon1, pokemon2);
      expect(pokemon2.hitPoints).toBe(52);
    });

    test("fight will deduct damage equivalent to attacking pokemon's attackDamage * 0.75 when defender strong against attacker", () => {
      const pokemon1 = battle.trainer1.belt[2].throw();
      const pokemon2 = battle.trainer2.belt[2].throw();
      battle.fight(pokemon1, pokemon2);
      expect(pokemon2.hitPoints).toBe(50.75);
    });

    test("Fight will deduct damage equivalant to attacking pokemon's attackDamage * 1.25 when defender weak against attacker", () => {
      const pokemon1 = battle.trainer1.belt[1].throw();
      const pokemon2 = battle.trainer2.belt[2].throw();
      battle.fight(pokemon1, pokemon2);
      expect(pokemon2.hitPoints).toBe(40);
    });

    test('fight will return a string altering the player that the pokemon has fainted if it faints', () => {
      const pokemon1 = battle.trainer1.belt[1].throw();
      const pokemon2 = battle.trainer2.belt[2].throw();
      pokemon2.hitPoints = 10;

      expect(battle.fight(pokemon1, pokemon2)).toBe(
        `${pokemon2.name} has fainted`
      );
    });
  });

  describe('selectPokemon', () => {
    test('Instances of Battle should have a selectPokemon method', () => {
      expect(typeof battle.selectPokemon).toBe('function');
    });

    test('selectPokemon should take an instance of trainer and a pokemon name in form of string as arguments', () => {
      const selectSpy = jest.spyOn(battle, 'selectPokemon');
      battle.selectPokemon(trainer1, 'Eevee');
      expect(selectSpy).toBeCalledWith(trainer1, 'Eevee');
    });

    test('selectPokemon should return an object', () => {
      expect(typeof battle.selectPokemon(trainer1, 'Eevee')).toBe('object');
    });

    test('selectPokemon should return an instance of Pokemon', () => {
      expect(battle.selectPokemon(trainer1, 'Eevee')).toBeInstanceOf(Pokemon);
    });

    test('selectPokemon should return the correct pokemon for the passed argument', () => {
      expect(battle.selectPokemon(trainer1, 'Eevee')).toEqual(eevee_1);
    });
  });
});
