import card from "./card";
import { RANKS, VALUES, SUITS } from "./cardinfo";
const shuffle = require("lodash/shuffle");

export default class Deck {
  constructor() {
    this.cards = [];
    for (const rank in RANKS) {
      for (const suit in SUITS) {
        this.cards.push(new card(rank, suit));
      }
    }
    this.cards = shuffle(this.cards);
  }
}
