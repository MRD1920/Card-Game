import { VALUES } from "./cardinfo";

export default class card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.value = VALUES[rank];
  }
}
