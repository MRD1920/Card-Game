// const VALUES = require("./cardinfo.js");
import { VALUES } from "./cardinfo.js";

export default class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.value = VALUES[rank];
  }
  toString() {
    return this.rank + " of " + this.suit;
  }
}
