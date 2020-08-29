import { Uno, Deck } from '../';

it('initializes', () => {
  expect(new Uno()).toBeDefined();
});

it('creates a deck', () => {
  const deck = new Deck();
  expect(deck.cards).toHaveLength(108);
});

it('shuffles the deck', () => {
  const deck = new Deck();
  deck.shuffle();
  expect(deck.cards).not.toEqual(new Deck().cards);
});

it('deals hands', () => {
  const deck = new Deck();

  deck.shuffle();

  const hands = deck.deal();

  expect(hands).toHaveLength(2);
  expect(hands[0]).toHaveLength(7);
  expect(hands[1]).toHaveLength(7);
  expect(deck.cards).toHaveLength(94);
});

// Next time: specific cards
