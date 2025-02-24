class Battle {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.trainer1SelectedPokemon = {};
    this.trainer2SelectedPokemon = {};
  }

  calculateDamageMultiplier(attacker, defender) {
    if (defender.isEffectiveAgainst(attacker)) return 0.75;
    if (defender.isWeakTo(attacker)) return 1.25;
    return 1;
  }

  fight(attacker, defender) {
    const damage = attacker.useMove();
    const multiplier = this.calculateDamageMultiplier(attacker, defender);
    const damageTaken = damage * multiplier;

    // console.log(
    //   `\n\t${attacker.name} use ${attacker.move} on ${defender.name} for ${damageTaken} points!\n\t`
    // );

    defender.takeDamage(damageTaken);

    if (defender.hasFainted()) return `${defender.name} has fainted`;
  }

  selectPokemon(trainer, pokemon) {
    return trainer.belt.filter((ball) => ball.pokemon.name === pokemon)[0]
      .pokemon;
  }
}

module.exports = Battle;
