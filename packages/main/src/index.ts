import { min, version } from '@games/foo';
import { TicTacToe } from '@games/tic-tac-toe';

console.log('lodash version', version());
console.log('Min of 5 and 4: ', min(5, 4));
console.log('tic-tac-toe', new TicTacToe('Alice', 'Bob'));
