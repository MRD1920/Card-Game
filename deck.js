import Card from "./card";
import { RANKS, SUITS } from "./cardinfo";
//const shuffle = require("lodash/shuffle");

export default class Deck {
  constructor() {
    this.cards = [];
    for (const rank in RANKS) {
      for (const suit in SUITS) {
        this.cards.push(new Card(rank, suit));
      }
    }
    this.cards = shuffle(this.cards);
  }

  shuffle(cards) {
    let currentIndex = cards.length,
      randomIdx;
    while (currentIndex != 0) {
      randomIdx = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // now swap them
      [cards[currentIndex], cards[randomIdx]] = [
        cards[randomIdx],
        cards[currentIndex],
      ];
    }
    return this.shuffle;
  }

  deal(numCards) {
    const hand = [];
    for (let i = 0; i < numCards; i++) {
      hand.push(this.cards.pop());
    }
    return hand;
  }
}
