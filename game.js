const Deck = require("./deck");
const Player = require("./player");

class Game {
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
    while (!this.winner) {
      console.log(
        `\nCurrent card: ${this.discardPile[this.discardPile.length - 1]}`
      );
      const player = this.players[this.currentPlayer];
      console.log(`\n${player.name}'s turn`);
      console.log(`InHand Cards: ${player.getHand().join(", ")}`);

      const validPlay = player.getValidPlay(this.discardPile);
      if (validPlay) {
        console.log(`Valid play: ${validPlay}`);
        player.play(validPlay, this.discardPile);
        if (player.getHandSize() === 0) {
          this.winner = player;
        } else {
          switch (validPlay[0]) {
            case "A":
              console.log("Skipping next player");
              this.currentPlayer = this.getNextPlayer(2);
              break;
            case "K":
              console.log("Reversing direction");
              this.direction *= -1;
              break;
            case "Q":
              console.log("Drawing 2 cards");
              this.players[this.getNextPlayer(1)].drawCards(2, this.deck);
              break;
            case "J":
              console.log("Drawing 4 cards");
              this.players[this.getNextPlayer(1)].drawCards(4, this.deck);
              break;
          }
        }
      } else {
        console.log("Drawing a card");
        player.drawCards(1, this.deck);
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
module.exports = { Game };
