const chalk = require('chalk');
const { pokemon } = require('../Instances');
const { pokeballs } = require('../Instances');
const { battleEncounterPhrases, releasedPhrases } = require('./data.js');

const pokeballList = [];
for (const ball in pokeballs) {
  pokeballList.push(ball); // list of pokeball names by string
}

const pokemonList = [];
for (const poke in pokemon) {
  pokemonList.push(pokemon[poke].name); // list of pokemon names by string
}

const borderColour = chalk.hex('#6A0DAD');

function generateEncouterPhrase() {
  const i = Math.floor(Math.random() * battleEncounterPhrases.length);
  return battleEncounterPhrases[i];
}

function generateReleasePhrase() {
  const i = Math.floor(Math.random() * releasedPhrases.length);
  return releasedPhrases[i];
}
function releasePhraseLog(name, pokemon) {
  const colour = typeColourSelector(pokemon);
  console.log(`\n\t${name} ${generateReleasePhrase()} ${colour(pokemon)}!`);
}

function typeColourSelector(object) {
  let type;
  if (typeof object === 'string') type = pokemonLookup(object).type;
  else type = object.type;
  let colour;
  switch (type) {
    case 'normal':
      colour = '#A8A77A';
      break;
    case 'fire':
      colour = '#EE8130';
      break;
    case 'water':
      colour = '#6390F0';
      break;
    case 'grass':
      colour = '#7AC74C';
      break;
  }
  return chalk.hex(colour);
}

function attackLog(attacker, defender, damageTaken) {
  const attColour = typeColourSelector(attacker.name);
  const defColour = typeColourSelector(defender.name);

  console.log(
    `\n\t${borderColour(
      '≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈'
    )}\n\n\t${attColour(attacker.name)} use ${attacker.move} on ${defColour(
      defender.name
    )} for ${damageTaken} points!\n\t`
  );
}

function hitPointsReductionLog(pokemon) {
  const colour = typeColourSelector(pokemon.name);
  console.log(
    `\n\t${colour(pokemon.name)}\'s hitPoints reduced to ${
      pokemon.hitPoints > 0 ? pokemon.hitPoints : 0
    }!`
  );
}

function healthBar(pokemon) {
  let hb = [];
  let colour;

  const remainingPercentage = (
    Math.floor((pokemon.hitPoints / pokemon.maxHitPoints) * 100) / 5
  ).toFixed();
  if (remainingPercentage * 5 === 100) {
    const fullHealthBar = Array(20).fill('█');
    colour = chalk.hex('#00FF00');
    console.log(
      `\n\t${colour(fullHealthBar.join(''))}  ${chalk.blue(
        pokemon.hitPoints
      )} / ${chalk.blue(pokemon.maxHitPoints)}\n`
    );
    return;
  }

  for (let i = 0; i < 20; i++) {
    if (i < remainingPercentage) hb.push('█');
    if (i > remainingPercentage) hb.push('░');
  }

  if (remainingPercentage * 5 >= 76) {
    colour = chalk.hex('#00FF00');
    console.log(
      `\n\t${colour(hb.join(''))}  ${colour(pokemon.hitPoints)} / ${chalk.blue(
        pokemon.maxHitPoints
      )}\n\n\t${borderColour(
        '≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈'
      )}\n`
    );
    return;
  }
  if (remainingPercentage * 5 <= 75 && remainingPercentage * 5 >= 51) {
    colour = chalk.hex('#A8E400');
    console.log(
      `\n\t${colour(hb.join(''))}  ${colour(pokemon.hitPoints)} / ${chalk.blue(
        pokemon.maxHitPoints
      )}\n\n\t${borderColour(
        '≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈'
      )}\n`
    );
    return;
  }
  if (remainingPercentage * 5 <= 50 && remainingPercentage * 5 >= 26) {
    colour = chalk.hex('#FFAA00');
    console.log(
      `\n\t${colour(hb.join(''))}  ${colour(pokemon.hitPoints)} / ${chalk.blue(
        pokemon.maxHitPoints
      )}\n\n\t${borderColour(
        '≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈'
      )}\n`
    );
    return;
  }
  if (remainingPercentage * 5 <= 25 && remainingPercentage * 5 >= 0.25) {
    colour = chalk.hex('#FF0000');
    console.log(
      `\n\t${colour(hb.join(''))}  ${colour(pokemon.hitPoints)} / ${chalk.blue(
        pokemon.maxHitPoints
      )}\n\n\t${borderColour(
        '≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈'
      )}\n`
    );
    return;
  }
  if (pokemon.hitPoints <= 0) {
    colour = chalk.hex('#555555');
    const emptyHealthBar = Array(20).fill('░');
    console.log(
      `\n\t${colour(emptyHealthBar.join(''))}  ${colour(0)} / ${chalk.blue(
        pokemon.maxHitPoints
      )}\n\n\t${borderColour(
        '≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈'
      )}\n`
    );
    return;
  }
}

function borderLog(currentTrainer) {
  let borderColour;
  if (currentTrainer.npc === true) {
    borderColour = typeColourSelector(currentTrainer);
    console.log(
      `\n\t${borderColour(
        '≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈'
      )}\n`
    );
  } else {
    borderColour = chalk.hex('#FF4500');
    console.log(
      `\n\t${borderColour(
        '≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈'
      )}\n`
    );
  }
}

function pokemonLookup(chosenPokemon) {
  for (const poke in pokemon) {
    if (chosenPokemon === pokemon[poke].name) {
      return pokemon[poke]; // uses name to retrieve the associated pokemon object
    }
  }
  return pokemon.leafeon; // handles the several buggy grass pokemon that don't work with this function
}

function catchPokemon(pokeball, pokemon) {
  for (const ball in pokeballs) {
    if (pokeball === ball) {
      pokeballs[ball].throw(pokemon);
      pokeballList.shift();
      return; // catches pokemon object inside a pokeball object
    }
  }
}

function removeFaintedPokemon(currentTrainer) {
  let faintedPokemon;

  currentTrainer.belt.forEach((pokeball, i) => {
    if (pokeball.pokemon.hasFainted()) {
      faintedPokemon = pokeball.pokemon.name;
      currentTrainer.belt.splice(i, 1);
    }
  });

  if (faintedPokemon) {
    const colour = typeColourSelector(faintedPokemon);
    console.log(`\n\t${colour(faintedPokemon)} has fainted!\n\t`);
  }
}

module.exports = {
  pokemonLookup,
  catchPokemon,
  pokeballList,
  pokemonList,
  generateEncouterPhrase,
  releasePhraseLog,
  typeColourSelector,
  hitPointsReductionLog,
  attackLog,
  healthBar,
  borderLog,
  removeFaintedPokemon,
};
