import { TicTacToe, IllegalMoveError } from '../';

const player1 = 'player 1';
const player2 = 'player 2';

it('reflects players', () => {
  const game = new TicTacToe({ player1, player2, boardSize: 3 });
  expect(game.player1).toEqual(player1);
  expect(game.player2).toEqual(player2);
});

it('accepts valid moves', () => {
  const game = new TicTacToe({ player1, player2, boardSize: 3 });

  game.choose(0, 0);

  expect(game.board[0][0]).toEqual(player1);
});

it('switches players', () => {
  const game = new TicTacToe({ player1, player2, boardSize: 3 });

  game.choose(0, 0);
  game.choose(1, 0);

  expect(game.board[1][0]).toEqual(player2);
});

it('rejects invalid moves', () => {
  const game = new TicTacToe({ player1, player2, boardSize: 3 });

  expect(() => game.choose(-1, 4)).toThrowError(IllegalMoveError);
});

it('rejects occupied spots', () => {
  const game = new TicTacToe({ player1, player2, boardSize: 3 });

  game.choose(0, 0);
  expect(() => game.choose(0, 0)).toThrowError(IllegalMoveError);
});

it('reports winner', () => {
  const game = new TicTacToe({ player1, player2, boardSize: 3 });

  game.choose(0, 0);
  game.choose(0, 1);
  game.choose(1, 1);
  game.choose(0, 2);
  game.choose(2, 2);

  expect(game.winner).toEqual(player1);
});

it('rejects moves after winner', () => {
  const game = new TicTacToe({ player1, player2, boardSize: 3 });

  game.choose(0, 0);
  game.choose(0, 1);
  game.choose(1, 1);
  game.choose(0, 2);
  game.choose(2, 2);

  expect(() => game.choose(1, 0)).toThrowError(IllegalMoveError);
});
