import { Game } from "./game.js";
import promptSync from "prompt-sync";
const prompt = promptSync();

// Enter the number of players before starting the game here
const numPlayers = prompt("Enter the number of players \n");
const game = new Game(numPlayers);
game.play();
