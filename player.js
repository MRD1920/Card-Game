export default class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
  draw(deck, numsCards) {
    this.hand = this.hand.concat(deck.deal(numsCards));
  }

  play(card, discardPile) {
    if (
      card.rank === discardPile[discardPile.length - 1].rank ||
      card.suit === discardPile[discardPile.length - 1].suit
    ) {
      discardPile.push(card);
      this.hand.splice(this.hand.indexOf(card), 1);
      return true;
    } else {
      return false;
    }
  }

  getValidPlay(discardPile) {
    for (let card of this.hand) {
      if (
        card.rank === discardPile[discardPile.length - 1].rank ||
        card.suit === discardPile[discardPile.length - 1].suit
      ) {
        return card;
      }
    }
    return null;
  }
  hasCards() {
    return this.hand.length > 0;
  }

  getHand() {
    return this.hand.map((card) => card.toString());
  }
}
