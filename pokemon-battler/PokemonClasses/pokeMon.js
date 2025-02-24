class Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.maxHitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
  }

  takeDamage(damage) {
    this.hitPoints -= damage;
  }

  hasFainted() {
    return this.hitPoints <= 0;
  }

  useMove() {
    return this.attackDamage;
  }
}

module.exports = Pokemon;
