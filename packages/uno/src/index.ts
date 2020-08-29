// Rules here: http://play-k.kaserver5.org/Uno.html

export class Uno {}

export class Deck {
  cards: Array<number>;

  constructor() {
    this.cards = [];
    for (let i = 0; i < 108; i++) {
      this.cards[i] = i;
    }
  }

  shuffle(): void {
    for (let i = 0; i < 1000; i++) {
      this.swapCard(this.getRandomCard(), this.getRandomCard());
    }
  }

  deal(): Array<Array<number>> {
    const hands: Array<Array<number>> = [];
    for (let h = 0; h < 2; h++) {
      const hand: Array<number> = [];
      for (let i = 0; i < 7; i++) {
        const card = this.cards.pop();
        if (!card) throw Error('empty deck');
        hand.push(card);
      }
      hands.push(hand);
    }
    return hands;
  }

  private getRandomCard() {
    return Math.floor(Math.random() * 108);
  }

  private swapCard(i1: number, i2: number) {
    const card = this.cards[i1];
    this.cards[i1] = this.cards[i2];
    this.cards[i2] = card;
  }
}
