const Pokemon = require('./pokeMon');

class FirePokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = 'fire';
  }

  isEffectiveAgainst(pokemon) {
    return pokemon.type === 'grass';
  }

  isWeakTo(pokemon) {
    return pokemon.type === 'water';
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = 'water';
  }

  isEffectiveAgainst(pokemon) {
    return pokemon.type === 'fire';
  }

  isWeakTo(pokemon) {
    return pokemon.type === 'grass';
  }
}

class GrassPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = 'grass';
  }

  isEffectiveAgainst(pokemon) {
    return pokemon.type === 'water';
  }

  isWeakTo(pokemon) {
    return pokemon.type === 'fire';
  }
}

class NormalPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = 'normal';
  }

  isEffectiveAgainst(pokemon) {
    return false;
  }
  isWeakTo(pokemon) {
    return false;
  }
}

module.exports = { FirePokemon, WaterPokemon, GrassPokemon, NormalPokemon };
