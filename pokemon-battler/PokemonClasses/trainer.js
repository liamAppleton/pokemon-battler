class Trainer {
  constructor(name, pb1, pb2, pb3, pb4, pb5, pb6, npc = false) {
    this.name = name;
    this.belt = [pb1, pb2, pb3, pb4, pb5, pb6];
    this.npc = npc;
  }

  catch(pokemon) {
    for (let ball of this.belt) {
      if (ball.isEmpty()) {
        ball.throw(pokemon);
        return;
      }
    }
    return 'All pokeballs full';
  }

  getPokemon(pokemonName) {
    for (let ball of this.belt) {
      if (ball.contains() === pokemonName) {
        return ball.throw();
      }
    }
    return 'Pokemon not found';
  }
}

module.exports = Trainer;
