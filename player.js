export default class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
  draw(numsCards, deck) {
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

  getValidPlayablesPos() {
    let validPlayablesPos = [];
    let i = 0;
    for (let card of this.hand) {
      if (
        card.rank === discardPile[discardPile.length - 1].rank ||
        card.suit === discardPile[discardPile.length - 1].suit
      ) {
        validPlayablesPos.push(i);
      }
      i++;
    }
    return validPlayablesPos;
  }

  getCardAtPos(pos) {
    return this.hand[pos - 1];
  }

  hasCards() {
    return this.hand.length > 0;
  }

  getHandSize() {
    return this.hand.length;
  }

  getHand() {
    return this.hand.map((card) => card.toString());
  }
}
