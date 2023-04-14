import { Game } from "./game.js";
import promptSync from "prompt-sync";
const prompt = promptSync();

// Enter the number of players before starting the game here
console.log("Enter the number of players");
const numPlayers = prompt();
const game = new Game(numPlayers);
game.play();
