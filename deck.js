import Card from "./card.js";
import { RANKS, SUITS } from "./cardinfo.js";

export default class Deck {
  constructor() {
    this.cards = [];
    for (const rank of RANKS) {
      for (const suit of SUITS) {
        this.cards.push(new Card(rank, suit));
      }
    }
    this.shuffle();
  }

  shuffle() {
    for (let i = this.cards.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal(numCards) {
    const hand = [];
    for (let i = 0; i < numCards; i++) {
      hand.push(this.cards.pop());
    }
    return hand;
  }
}
