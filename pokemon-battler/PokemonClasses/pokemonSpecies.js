const {
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
  NormalPokemon,
} = require('./pokemonTypes');

class Charmander extends FirePokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage);
    this.move = 'ember';
  }
}

class Squirtle extends WaterPokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage);
    this.move = 'water gun';
  }
}

class Bulbasaur extends GrassPokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage);
    this.move = 'vine whip';
  }
}

class Rattata extends NormalPokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage);
  }
}

module.exports = { Charmander, Squirtle, Bulbasaur, Rattata };
