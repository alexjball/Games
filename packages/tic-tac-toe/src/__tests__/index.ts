import { TicTacToe } from '../';

const player1Name = 'player 1';
const player2Name = 'player 2';

it('reflects players', () => {
  const game = new TicTacToe(player1Name, player2Name);
  expect(game.player1).toEqual(player1Name);
  expect(game.player2).toEqual(player2Name);
});
