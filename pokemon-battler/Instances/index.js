const {
  Pokeball,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
  NormalPokemon,
} = require('../PokemonClasses');
const {
  aromaLadyViolet,
  aceTrainerNoah,
  blazeMasterEmber,
  tidalQueenMarina,
  veteranMarcus,
  rivalDamien,
} = require('./npc-trainers');

// Pokemon
// Normal
const skitty = new NormalPokemon('Skitty', 50, 17, 'Cute Charm');
const exploud = new NormalPokemon('Exploud', 65, 15, 'Tackle');
const eevee = new NormalPokemon('Eevee', 55, 18, 'Headbutt');
const snorlax = new NormalPokemon('Snorlax', 160, 30, 'Body Slam');
const pidgeot = new NormalPokemon('Pidgeot', 83, 25, 'Quick Attack');
const ursaring = new NormalPokemon('Ursaring', 90, 27, 'Slash');
const kangaskhan = new NormalPokemon('Kangaskhan', 105, 28, 'Dizzy Punch');
const furret = new NormalPokemon('Furret', 85, 20, 'Hyper Fang');
// Fire
const flareon = new FirePokemon('Flareon', 65, 20, 'Fire Blast');
const charmander = new FirePokemon('Charmander', 44, 17, 'Flamethrower');
const torchic = new FirePokemon('Torchic', 45, 19, 'Blaze');
const arcanine = new FirePokemon('Arcanine', 90, 28, 'Heat Wave');
const ninetales = new FirePokemon('Ninetales', 73, 22, 'Will-O-Wisp');
const houndoom = new FirePokemon('Houndoom', 75, 26, 'Fire Fang');
const magmortar = new FirePokemon('Magmortar', 75, 29, 'Lava Plume');
const torkoal = new FirePokemon('Torkoal', 70, 24, 'Flame Wheel');
// Water
const vaporeon = new WaterPokemon('Vaporeon', 70, 19, 'Hydro Pump');
const mudkip = new WaterPokemon('Mudkip', 50, 22, 'Torrent');
const squirtle = new WaterPokemon('Squirtle', 44, 16, 'Surf');
const gyarados = new WaterPokemon('Gyarados', 95, 30, 'Aqua Tail');
const lapras = new WaterPokemon('Lapras', 130, 28, 'Water Pulse');
const empoleon = new WaterPokemon('Empoleon', 84, 26, 'Bubble Beam');
const feraligatr = new WaterPokemon('Feraligatr', 85, 29, 'Crunch');
const politoed = new WaterPokemon('Politoed', 90, 22, 'Scald');
// Grass
const treecko = new GrassPokemon('Treecko', 40, 15, 'Overgrow');
const leafeon = new GrassPokemon('Leafeon', 65, 17, 'Giga Drain');
const bulbasaur = new GrassPokemon('Bulbasaur', 45, 16, 'Razor Leaf');
const sceptile = new GrassPokemon('Sceptile', 70, 27, 'Leaf Blade');
const roserade = new GrassPokemon('Roserade', 60, 24, 'Energy Ball');
const chesnaught = new GrassPokemon('Chesnaught', 88, 30, 'Seed Bomb');
const tangrowth = new GrassPokemon('Tangrowth', 100, 26, 'Power Whip');
const venusaur = new GrassPokemon('Venusaur', 80, 25, 'Solar Beam');

// Pokeballs
const pb1 = new Pokeball();
const pb2 = new Pokeball();
const pb3 = new Pokeball();
const pb4 = new Pokeball();
const pb5 = new Pokeball();
const pb6 = new Pokeball();
const pb7 = new Pokeball();
const pb8 = new Pokeball();
const pb9 = new Pokeball();
const pb10 = new Pokeball();
const pb11 = new Pokeball();
const pb12 = new Pokeball();

module.exports.pokemon = {
  tangrowth,
  ninetales,
  feraligatr,
  torchic,
  pidgeot,
  sceptile,
  magmortar,
  politoed,
  exploud,
  eevee,
  kangaskhan,
  snorlax,
  chesnaught,
  gyarados,
  arcanine,
  squirtle,
  vaporeon,
  flareon,
  ursaring,
  roserade,
  lapras,
  venusaur,
  treecko,
  skitty,
  houndoom,
  empoleon,
  leafeon,
  torkoal,
  bulbasaur,
  furret,
  charmander,
  mudkip,
};

module.exports.pokeballs = {
  pb1,
  pb2,
  pb3,
  pb4,
  pb5,
  pb6,
  pb7,
  pb8,
  pb9,
  pb10,
  pb11,
  pb12,
};

module.exports.npcTrainers = {
  aromaLadyViolet,
  aceTrainerNoah,
  blazeMasterEmber,
  tidalQueenMarina,
  veteranMarcus,
  rivalDamien,
};
