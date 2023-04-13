import { VALUES } from "./cardinfo";

export default class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.value = VALUES[rank];
  }
  toString() {
    return this.rank + this.suit;
  }
}
