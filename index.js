// import Game from "./game";

// let numPlayers = prompt(`Enter the number of Player to play the game`);
// console.log(`\n Starting the game for ${numPlayers} Players `);

// const game = new Game(numPlayers);
// game.play();
import { Game } from "./game";

const numPlayers = 4;
const game = new Game(numPlayers);
game.play();
