// // challenge 1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// //1
// const [player1, player2] = game.players;

// //2
// const [gk, ...fieldPlayers] = player1;

// //3
// const allPlayers = [...player1, ...player2];

// // 4
// const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

// //5
// // const { team1, x: draw, team2 } = game.odds;
// // another away
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// // 6

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals are scored!`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski');
// printGoals(...game.scored);

// // 7

// team2 > team1 && console.log('Team 1 is more likely to win!');
// team1 > team2 && console.log('Team 2 is more likely to win!');

// // console.log(team2);

// challenge 2 ***************************************************************

// // 1
// for (const [key, playerName] of game.scored.entries()) {
//   console.log(`Goal ${key + 1}: ${playerName}`);
// }

// //2
// const odds = Object.values(game.odds);
// let totalOdds = 0;
// for (const value of odds) {
//   totalOdds += value;
// }
// const avgOdds = totalOdds / odds.length;
// console.log(`Average odd is: ${avgOdds}`);

// // 3
// const oddsEntries = Object.entries(game.odds);
// // console.log(oddsEntries);

// for (const [team, value] of oddsEntries) {
//   const teamStr = team === 'x' ? 'Draw' : `${game[team]}`;
//   console.log(`Odd of victory ${teamStr}: ${value}`);
// }

// //Bonus part
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// challenge 3 ********************************************

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3
// // let average = gameEvents.size;
// // average = 90 / average;
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4
// for (const [key, value] of gameEvents) {
//   const half = key <= 45 ? 'FIRST' : 'SECOND';

//   console.log(`[${half} HALF] ${key}:  ${value}`);

//   // if (key <= 45) {
//   //   console.log(`[FIRST HALF] ${key}:  ${value}`);
//   // } else if (key > 45) {
//   //   console.log(`[SECOND HALF] ${key}:  ${value}`);
//   // }
// }

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const camelCaseName = function (name) {
  const names = name.toLowerCase().split('\n');
  const joinName = [];
  for (const [key, n] of names.entries()) {
    const nameSplit = n.split('_');
    joinName.push(
      nameSplit[0] +
        nameSplit[1].replace(nameSplit[1][0], nameSplit[1][0].toUpperCase()) +
        ' ' +
        '✅'.repeat(key + 1)
    );
  }
  return joinName.join('\n');

  // console.log(names);
};

const camelCaseName2 = function (variables) {
  const rows = variables.split('\n');
  for (const [key, row] of rows.entries()) {
    // console.log(row);
    const [firstName, lastName] = row.toLowerCase().trim().split('_');
    const output = `${firstName}${lastName.replace(
      lastName[0],
      lastName[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(key + 1)}`);
  }
};

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  // console.log(text);
  // console.log(camelCaseName(text));
  camelCaseName2(text);
});

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} form ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(47);
  console.log(output);
}
