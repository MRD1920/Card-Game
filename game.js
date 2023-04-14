import Deck from "./deck.js";
import Player from "./player.js";
import promptSync from "prompt-sync";
const prompt = promptSync();

export class Game {
  constructor(numPlayers) {
    this.numPlayers = numPlayers;
    this.deck = new Deck();
    this.direction = 1; // clockwise direction
    this.winner = null;
    this.discardPile = [this.deck.cards.pop()]; // one card has to be discarded to start the game
    this.currentPlayer = 0;
    this.players = Array.from(
      { length: numPlayers },
      (_, i) => new Player(`Player ${i + 1}`)
    );
  }

  play() {
    // as initially every player has 5 cards at hand;
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].draw(5, this.deck);
    }

    while (!this.winner) {
      console.log(
        `\n Discard Pile top card : ${
          this.discardPile[this.discardPile.length - 1]
        }`
      );
      const player = this.players[this.currentPlayer];
      console.log(`\n${player.name}'s turn`);
      console.log(`InHand Cards: ${player.getHand().join(", ")}`);

      const validPlay = player.getValidPlay(this.discardPile);
      console.log(validPlay);
      //const validPlayablesPos = player.getValidPlayablesPos(this.discardPile);

      if (validPlay) {
        //console.log(`Valid play: ${validPlay}`);
        console.log(
          "There is a valid play possible for the cards in your hand.. Play one card from your hand\n"
        );
        // assuming user always enters the position of a valid card to play
        const userPlayPos = prompt(
          "Enter the position of the card u want to play from your hand : - "
        );

        const userPlay = player.getCardAtPos(userPlayPos);
        console.log(userPlay);

        player.play(userPlay, this.discardPile);
        if (player.getHandSize() === 0) {
          this.winner = player;
        } else {
          switch (userPlay[0]) {
            case "ace":
              console.log("Skipping next player");
              this.currentPlayer = this.getNextPlayer(2);
              break;
            case "king":
              console.log("Reversing direction");
              this.direction *= -1;
              break;
            case "queen":
              console.log("Drawing 2 cards");
              this.players[this.getNextPlayer(1)].draw(2, this.deck);
              break;
            case "jack":
              console.log("Drawing 4 cards");
              this.players[this.getNextPlayer(1)].draw(4, this.deck);
              break;
          }
        }
      } else {
        // if the programs that there is not valid play for the cards in hand then the computer
        // automatically draws one card and passes the turn to the next player.
        console.log("Drawing a card");
        player.draw(1, this.deck);
        if (this.deck.cards.length === 0) {
          console.log("No cards left in the deck. Game ends in a draw.");
          this.winner = "draw";
        }
      }

      if (!this.winner) {
        this.currentPlayer = this.getNextPlayer(1);
      }
    }

    if (this.winner !== "draw") {
      console.log(`\n${this.winner.name} wins the game!`);
    }
  }

  getNextPlayer(numSteps) {
    const nextPlayerIndex = this.currentPlayer + this.direction * numSteps;
    return (nextPlayerIndex + this.numPlayers) % this.numPlayers;
  }
}
// module.exports = { Game };
