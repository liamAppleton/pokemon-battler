#!/usr/bin/env node

const inquirer = require('inquirer');
const chalk = require('chalk');
const { pokemonLogo } = require('./data.js');
const {
  pokemonLookup,
  catchPokemon,
  pokeballList,
  pokemonList,
  generateEncouterPhrase,
  releasePhraseLog,
  hitPointsReductionLog,
  attackLog,
  healthBar,
  borderLog,
  typeColourSelector,
  removeFaintedPokemon,
} = require('./utils.js');
const { Battle, Trainer } = require('../PokemonClasses/index.js');
const { pokeballs } = require('../Instances/index.js');
const { npcTrainers } = require('../Instances/index.js');

let trainer, computer;
let gameStarted = false;
const playerChoices = [];
const yellow = chalk.hex('#FFD700');

function selectRandomNpc() {
  const trainerList = Object.keys(npcTrainers);
  const index = Math.floor(Math.random() * trainerList.length);
  const selectedNpc = trainerList[index];
  computer = npcTrainers[selectedNpc];
}

const battle = new Battle(trainer, computer);

function computerSelectPokemon() {
  const index = Math.floor(Math.random() * computer.belt.length);
  const pokemon = computer.belt[index].pokemon;
  battle.trainer2SelectedPokemon = pokemon;

  borderLog(computer);
  releasePhraseLog(computer.name, pokemon.name);
  healthBar(pokemon);
  borderLog(computer);
} // selects a random pokemon from computer's belt

function computerTurn() {
  const computerSelection = battle.trainer2SelectedPokemon;

  if (!computerSelection) computerSelectPokemon();

  if (computerSelection.hasFainted()) {
    computerSelectPokemon();
    round();
    return;
  }

  const attacker = battle.trainer2SelectedPokemon;
  const defender = battle.trainer1SelectedPokemon;

  setTimeout(() => {
    const defHitPoints = defender.hitPoints;
    battle.fight(attacker, defender);

    attackLog(attacker, defender, defHitPoints - defender.hitPoints);
    hitPointsReductionLog(defender);
    healthBar(defender);

    if (defender.hasFainted()) {
      removeFaintedPokemon(trainer);
    }

    if (trainer.belt.length === 0) {
      const computerColour = typeColourSelector(computer);
      borderLog(computer);
      console.log(`\n\t${computerColour(computer.name)} wins!\n`);
      borderLog(computer);
      return;
    } // computer win condition
    setTimeout(() => round(), 500); // back to round
  }, 1000);
}

function pokemonSelection() {
  const selectPokemonQuestions = [
    {
      type: 'list',
      name: 'pokemon',
      message: 'select a pokemon: ',
      choices: pokemonList,
      loop: false,
    },
  ];

  if (playerChoices.length === 6) {
    // this block runs when the player has selected 6 pokemon
    borderLog(computer);
    console.log(`\n\t${computer.name}: ${generateEncouterPhrase()}\n\t`);

    computerSelectPokemon();
    round();
    return;
  }

  if (!gameStarted) {
    const askName = {
      type: String,
      name: 'trainerName',
      message: 'What is your name? ',
    };
    inquirer.prompt(askName).then((name) => {
      initialiseTrainers(name.trainerName);

      console.log(yellow(`\n\tWelcome ${trainer.name}!\n`));

      pokemonSelection();
    });
    gameStarted = true;
  } else {
    inquirer.prompt(selectPokemonQuestions).then((answer) => {
      const index = pokemonList.indexOf(answer.pokemon);
      pokemonList.splice(index, 1); // remove pokemon from list
      playerChoices.push(answer.pokemon);

      const playerChoice = pokemonLookup(answer.pokemon);
      catchPokemon(pokeballList[0], playerChoice);

      const pokeballRed = chalk.hex('#ee1515');
      const pokeballWhite = chalk.hex('#f0f0f0');
      console.log(
        `\n\t${pokeballWhite('pokeballs')}: ${pokeballWhite(
          playerChoices.length
        )} / ${pokeballRed('6')} \n`
      );

      pokemonSelection();
    });
  }
}

function initialiseTrainers(name) {
  trainer = new Trainer(
    name,
    pokeballs.pb1,
    pokeballs.pb2,
    pokeballs.pb3,
    pokeballs.pb4,
    pokeballs.pb5,
    pokeballs.pb6
  );

  selectRandomNpc();
}

function round() {
  const roundMoveQuestions = {
    type: 'list',
    name: 'playerMove',
    message: 'What would you like to do?',
    choices: ['FIGHT', 'POKéMON', 'RUN'],
  };

  const trainerBelt = trainer.belt.map((pokeball) => pokeball.pokemon.name);
  const roundSelectPokemonQuestion = [
    {
      type: 'list',
      name: 'pokemon',
      message: 'select a pokemon to release:',
      choices: trainerBelt,
      loop: false,
    },
  ];

  if (Object.keys(battle.trainer1SelectedPokemon).length === 0) {
    inquirer.prompt(roundSelectPokemonQuestion).then((pokemon) => {
      battle.trainer1SelectedPokemon = battle.selectPokemon(
        trainer,
        pokemon.pokemon
      );

      borderLog(trainer);
      releasePhraseLog(trainer.name, pokemon.pokemon);
      healthBar(battle.trainer1SelectedPokemon);
      borderLog(trainer);

      round();
      return;
    });
  } else if (battle.trainer1SelectedPokemon.hasFainted()) {
    inquirer.prompt(roundSelectPokemonQuestion).then((pokemon) => {
      battle.trainer1SelectedPokemon = battle.selectPokemon(
        trainer,
        pokemon.pokemon
      );
      const borderColour = chalk.hex('#6A0DAD');
      console.log(
        `\n\t${borderColour(
          '≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈'
        )}\n`
      );
      releasePhraseLog(trainer.name, pokemon.pokemon);
      healthBar(battle.trainer1SelectedPokemon);

      computerTurn();
      return;
    });
  } else {
    inquirer.prompt(roundMoveQuestions).then((answer) => {
      if (answer.playerMove === 'RUN') {
        gameRunning = false;

        console.log(yellow(`\n\t${trainer.name} escaped!\n`));
        return;
      }
      if (answer.playerMove === 'POKéMON') {
        inquirer.prompt(roundSelectPokemonQuestion).then((pokemon) => {
          battle.trainer1SelectedPokemon = battle.selectPokemon(
            trainer,
            pokemon.pokemon
          );
          const borderColour = chalk.hex('#6A0DAD');
          console.log(
            `\n\t${borderColour(
              '≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈'
            )}\n`
          );
          releasePhraseLog(trainer.name, pokemon.pokemon);
          healthBar(battle.trainer1SelectedPokemon);

          computerTurn();
          return;
        });
      }
      if (answer.playerMove === 'FIGHT') {
        const attacker = battle.trainer1SelectedPokemon;
        const defender = battle.trainer2SelectedPokemon;

        setTimeout(() => {
          const defHitPoints = defender.hitPoints;
          battle.fight(attacker, defender);
          attackLog(attacker, defender, defHitPoints - defender.hitPoints);
          hitPointsReductionLog(defender);
          healthBar(defender);

          removeFaintedPokemon(computer);

          if (computer.belt.length === 0) {
            borderLog(trainer);
            console.log(
              `\n\t🔥 🔥 🔥 ${yellow(trainer.name)} wins! 🔥 🔥 🔥 \n\t`
            );
            borderLog(trainer);
            return;
          }

          setTimeout(() => computerTurn(), 1000);
        }, 1000);
      }
    });
  }
}

function game() {
  console.log(yellow(pokemonLogo));
  setTimeout(() => {
    inquirer
      .prompt({
        type: 'confirm',
        name: 'startGame',
        message: 'Ready to do battle?',
      })
      .then((answer) => {
        if (answer.startGame) pokemonSelection();
      });
  }, 500);
}
game();
