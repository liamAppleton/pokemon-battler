class Pokeball {
  constructor() {
    this.pokemon = {};
  }

  isEmpty() {
    return Object.keys(this.pokemon).length === 0;
  }

  throw(pokemon) {
    if (this.isEmpty() && !pokemon) {
      return 'Pokeball is empty';
    }

    if (!pokemon) {
      console.log(`GO ${this.pokemon.name}!`);
      return this.pokemon;
    }
    if (this.isEmpty()) {
      this.pokemon = pokemon;
    }
  }

  contains() {
    return !this.isEmpty() ? this.pokemon.name : 'empty...';
  }
}

module.exports = Pokeball;
