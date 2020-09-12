interface TicTacToeCtor {
  player1: string;
  player2: string;
  boardSize: number;
}
export class TicTacToe {
  readonly player1: string;
  readonly player2: string;

  board: Array<Array<string | null>>;
  boardSize: number;
  waitingOn: string;
  winner: string | null = null;

  constructor({ player1, player2, boardSize }: TicTacToeCtor) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = [...Array(boardSize)].map(() => Array(boardSize).fill(null));
    this.boardSize = boardSize;
    this.waitingOn = player1;
  }

  choose(row: number, col: number): void {
    if (this.winner) {
      throw new IllegalMoveError('Game is complete');
    }
    this.validateChoice(row, col);
    if (this.board[row][col]) {
      throw new IllegalMoveError('Space already chosen');
    }

    this.board[row][col] = this.waitingOn;
    this.waitingOn =
      this.waitingOn == this.player1 ? this.player2 : this.player1;
    this.updateWinner();
  }

  validateChoice(row: number, col: number): void {
    [row, col].forEach(i => {
      if (Math.round(i) != i || i < 0 || i >= this.boardSize) {
        throw new IllegalMoveError('invalid row and col');
      }
    });
  }

  updateWinner(): void {
    this.visit(slice => {
      if (slice.every(v => v === this.player1)) {
        this.winner = this.player1;
      } else if (slice.every(v => v === this.player2)) {
        this.winner = this.player2;
      }
    });
  }

  visit(cb: (slice: Array<string | null>) => void): void {
    let slice: Array<string | null> = [];
    const slice2: Array<string | null> = [];
    this.board.forEach(row => cb(row));
    for (let col = 0; col < this.boardSize; col++) {
      slice = [];
      for (let row = 0; row < this.boardSize; row++) {
        slice.push(this.board[row][col]);
      }
      cb(slice);
    }
    slice = [];
    for (let i = 0; i < this.boardSize; i++) {
      slice.push(this.board[i][i]);
      slice2.push(this.board[i][this.boardSize - 1 - i]);
    }
    cb(slice);
  }
}

export class IllegalMoveError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
