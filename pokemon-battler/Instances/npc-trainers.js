const { Pokeball } = require('../PokemonClasses');
const {
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
} = require('../PokemonClasses/pokemonTypes');
const Trainer = require('../PokemonClasses/trainer');

// Grass-type Trainer - Aroma Lady Violet
const roserade = new GrassPokemon('Roserade', 60, 24, 'Poison Point');
const lilligant = new GrassPokemon('Lilligant', 70, 22, 'Chlorophyll');
const aromatisse = new GrassPokemon('Aromatisse', 90, 26, 'Absorb');
const cherrim = new GrassPokemon('Cherrim', 58, 20, 'Flower Gift');
const florges = new GrassPokemon('Florges', 85, 28, 'Symbiosis');
const bellossom = new GrassPokemon('Bellossom', 75, 25, 'Leaf Guard');

const pb1Grass = new Pokeball();
const pb2Grass = new Pokeball();
const pb3Grass = new Pokeball();
const pb4Grass = new Pokeball();
const pb5Grass = new Pokeball();
const pb6Grass = new Pokeball();

pb1Grass.throw(roserade);
pb2Grass.throw(lilligant);
pb3Grass.throw(aromatisse);
pb4Grass.throw(cherrim);
pb5Grass.throw(florges);
pb6Grass.throw(bellossom);

const aromaLadyViolet = new Trainer(
  'Aroma Lady Violet',
  pb1Grass,
  pb2Grass,
  pb3Grass,
  pb4Grass,
  pb5Grass,
  pb6Grass,
  true
);
aromaLadyViolet.type = 'grass';

// Normal-Type Trainer - Ace Trainer Noah
const snorlax = new NormalPokemon('Snorlax', 160, 30, 'Thick Fat');
const pidgeot = new NormalPokemon('Pidgeot', 83, 25, 'Tangled Feet');
const ursaring = new NormalPokemon('Ursaring', 90, 27, 'Guts');
const kangaskhan = new NormalPokemon('Kangaskhan', 105, 28, 'Scrappy');
const furret = new NormalPokemon('Furret', 85, 20, 'Keen Eye');
const eevee = new NormalPokemon('Eevee', 55, 18, 'Adaptability');

const pbNormal1 = new Pokeball();
const pbNormal2 = new Pokeball();
const pbNormal3 = new Pokeball();
const pbNormal4 = new Pokeball();
const pbNormal5 = new Pokeball();
const pbNormal6 = new Pokeball();

pbNormal1.throw(snorlax);
pbNormal2.throw(pidgeot);
pbNormal3.throw(ursaring);
pbNormal4.throw(kangaskhan);
pbNormal5.throw(furret);
pbNormal6.throw(eevee);

const aceTrainerNoah = new Trainer(
  'Ace Trainer Noah',
  pbNormal1,
  pbNormal2,
  pbNormal3,
  pbNormal4,
  pbNormal5,
  pbNormal6,
  true
);
aceTrainerNoah.type = 'normal';

// Fire-Type Trainer - Blaze Master Ember
const arcanine = new FirePokemon('Arcanine', 90, 28, 'Intimidate');
const ninetales = new FirePokemon('Ninetales', 73, 22, 'Drought');
const houndoom = new FirePokemon('Houndoom', 75, 26, 'Flash Fire');
const flareon = new FirePokemon('Flareon', 65, 20, 'Guts');
const magmortar = new FirePokemon('Magmortar', 75, 29, 'Flame Body');
const torchic = new FirePokemon('Torchic', 45, 19, 'Blaze');

const pbFire1 = new Pokeball();
const pbFire2 = new Pokeball();
const pbFire3 = new Pokeball();
const pbFire4 = new Pokeball();
const pbFire5 = new Pokeball();
const pbFire6 = new Pokeball();

pbFire1.throw(arcanine);
pbFire2.throw(ninetales);
pbFire3.throw(houndoom);
pbFire4.throw(flareon);
pbFire5.throw(magmortar);
pbFire6.throw(torchic);

const blazeMasterEmber = new Trainer(
  'Blaze Master Ember',
  pbFire1,
  pbFire2,
  pbFire3,
  pbFire4,
  pbFire5,
  pbFire6,
  true
);
blazeMasterEmber.type = 'fire';

// Water-Type Trainer - Tidal Queen Marina
const gyarados = new WaterPokemon('Gyarados', 95, 30, 'Intimidate');
const vaporeon = new WaterPokemon('Vaporeon', 70, 19, 'Water Absorb');
const lapras = new WaterPokemon('Lapras', 130, 28, 'Shell Armor');
const empoleon = new WaterPokemon('Empoleon', 84, 26, 'Torrent');
const feraligatr = new WaterPokemon('Feraligatr', 85, 29, 'Sheer Force');
const politoed = new WaterPokemon('Politoed', 90, 22, 'Drizzle');

const pbWater1 = new Pokeball();
const pbWater2 = new Pokeball();
const pbWater3 = new Pokeball();
const pbWater4 = new Pokeball();
const pbWater5 = new Pokeball();
const pbWater6 = new Pokeball();

pbWater1.throw(gyarados);
pbWater2.throw(vaporeon);
pbWater3.throw(lapras);
pbWater4.throw(empoleon);
pbWater5.throw(feraligatr);
pbWater6.throw(politoed);

const tidalQueenMarina = new Trainer(
  'Tidal Queen Marina',
  pbWater1,
  pbWater2,
  pbWater3,
  pbWater4,
  pbWater5,
  pbWater6,
  true
);
tidalQueenMarina.type = 'water';

// Balanced Trainer - Veteran Marcus
const venusaur = new GrassPokemon('Venusaur', 80, 25, 'Overgrow');

const pbMixed1 = new Pokeball();
const pbMixed2 = new Pokeball();
const pbMixed3 = new Pokeball();
const pbMixed4 = new Pokeball();
const pbMixed5 = new Pokeball();
const pbMixed6 = new Pokeball();

pbMixed1.throw(arcanine);
pbMixed2.throw(gyarados);
pbMixed3.throw(venusaur);
pbMixed4.throw(snorlax);
pbMixed5.throw(pidgeot);
pbMixed6.throw(roserade);

const veteranMarcus = new Trainer(
  'Veteran Marcus',
  pbMixed1,
  pbMixed2,
  pbMixed3,
  pbMixed4,
  pbMixed5,
  pbMixed6,
  true
);
veteranMarcus.type = 'normal';

// Balanced Trainer - Rival Damien
const pbMixed7 = new Pokeball();
const pbMixed8 = new Pokeball();
const pbMixed9 = new Pokeball();
const pbMixed10 = new Pokeball();
const pbMixed11 = new Pokeball();
const pbMixed12 = new Pokeball();

pbMixed7.throw(arcanine);
pbMixed8.throw(vaporeon);
pbMixed9.throw(ursaring);
pbMixed10.throw(roserade);
pbMixed11.throw(flareon);
pbMixed12.throw(feraligatr);

// Trainer: Rival Damien
const rivalDamien = new Trainer(
  'Rival Damien',
  pbMixed7,
  pbMixed8,
  pbMixed9,
  pbMixed10,
  pbMixed11,
  pbMixed12,
  true
);
rivalDamien.type = 'normal';

module.exports = {
  aromaLadyViolet,
  aceTrainerNoah,
  blazeMasterEmber,
  tidalQueenMarina,
  veteranMarcus,
  rivalDamien,
};
